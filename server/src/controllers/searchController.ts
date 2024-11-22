import { type Request, type Response } from 'express';
import { OpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { StructuredOutputParser } from 'langchain/output_parsers';
import { type Book } from '../types/book';
import dotenv from 'dotenv';

dotenv.config();

//define the apiKey and model
const apiKey = process.env.OPENAI_API_KEY;
let model: OpenAI;

//initialize the model if the key is provided
if (apiKey) {
    model = new OpenAI({ openaiApiKey: apiKey, modelName: 'gpt-3.5-turbo', search: '' });
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

