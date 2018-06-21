import * as path from 'path'
import { fileLoader, mergeTypes } from 'merge-graphql-schemas'
import { importSchema } from 'graphql-import'

const typesArray = fileLoader(path.join(__dirname, "./"), { recursive: true })
let typesMerged = mergeTypes(typesArray, { all: true })

const typesDefs = importSchema(typesMerged)

export default typesDefs
