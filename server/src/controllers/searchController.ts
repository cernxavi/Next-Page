import { type Request, type Response } from 'express';
import { OpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { StructuredOutputParser } from 'langchain/output_parsers';
import Book from '../types/book';
import dotenv from 'dotenv';

dotenv.config();

//define the apiKey and model
const apiKey = process.env.OPENAI_API_KEY;
let model: OpenAI;

//initialize the model if the key is provided
if (apiKey) {
    model = new OpenAI({ openAIApiKey: apiKey, modelName: 'gpt-3.5-turbo', temperature: 0.5 });
} else {
    console.error('API key not provided');
}

//parser function to format the output response
const parser = StructuredOutputParser.fromNamesAndDescriptions({
    title: 'Title of the book',
    description: 'Description of the book',
    author: 'Author of the book',
});

const formatInstructions = parser.getFormatInstructions();

//new prompt template 
const promptTemplate = new PromptTemplate({
    template: "You are a librarian who loves to recommend books to readers",
    inputVariables: ["text"],
    partialVariables: { format_instructions: formatInstructions },
});

//format the prompt using the prompt template with the user input
const formatPrompt = async (text: string): Promise<string> => {
    return promptTemplate.format({ text });
};

//call the openAI API to get a response to the formatted prompt
const promptFunc = async (input: string): Promise<string> => {
    try {
        if (model) {
            return await model.invoke(input);
        }
        return "```json\n{\n    \"code\": \"No OpenAI API key provided.\",\n    \"explanation\": \"Unable to provide a response.\"\n}\n```"
    } catch (err) {
        console.error(err);
        throw err;
    }
}

//parse the response from the openAI API
const parseResponse = async (response: string): Promise<Book> => {
    try {
        const parsed = await parser.parse(response);
        return {
            title: parsed.title || 'Unknown Title',
            description: parsed.description || 'No description available',
            author: parsed.author || 'Unknown Author',
        };
    } catch (err) {
        console.error(err);
        throw err;
    }
};

//handle the post request to the /recommend endpoint
export const recommend = async (req: Request, res: Response): Promise<void> => {
    try {
        const userText: string = req.body.text;

        if (!userText) {
            res.status(500).json({ text: null, response: 'please provide text' });
            return;
        }

        const { text } = req.body;
        const formattedPrompt = await formatPrompt(text);
        const response = await promptFunc(formattedPrompt);
        const book = await parseResponse(response);
        res.status(200).json(book);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
};
