import { type Request, type Response } from 'express';
// import { OpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { StructuredOutputParser } from 'langchain/output_parsers';
import Book from '../types/book';
import dotenv from 'dotenv';
import { ChatOpenAI } from '@langchain/openai';

dotenv.config();

//define the apiKey and model
const apiKey = process.env.OPENAI_API_KEY;
let model: ChatOpenAI;

//initialize the model if the key is provided
if (apiKey) {
    model = new ChatOpenAI({ openAIApiKey: apiKey, modelName: 'gpt-3.5-turbo', temperature: 1.5 });
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
    template: `Recommend a book related to the following topic: "{{text}}". Respond with a JSON object that includes exactly the following keys:
    - "title": Title of the book (a string)
    - "description": Description of the book (a string)
    - "author": Author of the book (a string)
    Make sure there are no extra fields.`,
    inputVariables: ['text'],
    partialVariables: { format_instructions: formatInstructions },
});

//format the prompt using the prompt template with the user input
const formatPrompt = async (text: string): Promise<string> => {
    // return promptTemplate.format({ text });
    const prompt = await promptTemplate.format({ text});
    console.log(prompt);
    return prompt;
};

//call the openAI API to get a response to the formatted prompt
const promptFunc = async (input: string): Promise<string> => {
    try {
        if (model) {
            const response = await model.invoke(input); // `response` is an AIMessageChunk
            const content = response.content;

            // Handle array content
            if (Array.isArray(content)) {
                return content
                    .map((chunk) => {
                        // Check if the chunk is of type that includes text
                        if ('text' in chunk && typeof chunk.text === 'string') {
                            return chunk.text;
                        }
                        return ''; // Skip non-text elements
                    })
                    .join(''); // Combine all text chunks into a single string
            }

            // Handle simple string content
            if (typeof content === 'string') {
                return content;
            }

            throw new Error('Unexpected response content format');
        }

        // Fallback response if no model is set
        return '{"title": "No recommendation", "description": "API key missing", "author": "Unknown"}';
    } catch (err) {
        console.error(err);
        throw new Error('Error calling OpenAI API');
    }
};


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
        return {
            title: 'Unknown Title',
            description: 'No description available',
            author: 'Unknown Author',
        }
    }
};

//handle the post request to the /recommend endpoint
export const recommend = async (req: Request, res: Response): Promise<void> => {
    try {
        const userText: string = req.body.text;
        console.log(userText);

        if (!userText) {
            res.status(500).json({ text: null, response: 'please provide text' });
            return;
        }

        // const { text } = req.body;
        const formattedPrompt = await formatPrompt(userText);
        const response = await promptFunc(formattedPrompt);
        const book = await parseResponse(response);
        res.status(200).json(book);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
};
