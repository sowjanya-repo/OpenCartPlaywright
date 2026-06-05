import fs from 'fs';
import {parse} from 'csv-parse/sync'
import { json } from 'stream/consumers';

export class dataProvider{

    static getTestDataFromJson(filePath:string){

     let data:any= JSON.parse(fs.readFileSync(filePath,'utf8'));

     return data;
    }

    static getTestDataFromCsv(filepath:string){

        let data:any=parse(fs.readFileSync(filepath),{columns:true,'skip_empty_lines':true});

        return data;

    }
}