/* eslint-disable */
import * as graphql from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "#graphql\n\tquery Article($slug: String!) {\n\t\tarticles(filter: { slug: { _eq: $slug } }) {\n\t\t\theading\n\t\t\tsub_heading\n\t\t\tcontent\n\t\t}\n\t}\n": graphql.ArticleDocument,
    "#graphql\n\tquery ArticleSlugs {\n\t\tarticles {\n\t\t\tslug\n\t\t}\n\t}\n": graphql.ArticleSlugsDocument,
};

export function gql(source: "#graphql\n\tquery Article($slug: String!) {\n\t\tarticles(filter: { slug: { _eq: $slug } }) {\n\t\t\theading\n\t\t\tsub_heading\n\t\t\tcontent\n\t\t}\n\t}\n"): (typeof documents)["#graphql\n\tquery Article($slug: String!) {\n\t\tarticles(filter: { slug: { _eq: $slug } }) {\n\t\t\theading\n\t\t\tsub_heading\n\t\t\tcontent\n\t\t}\n\t}\n"];
export function gql(source: "#graphql\n\tquery ArticleSlugs {\n\t\tarticles {\n\t\t\tslug\n\t\t}\n\t}\n"): (typeof documents)["#graphql\n\tquery ArticleSlugs {\n\t\tarticles {\n\t\t\tslug\n\t\t}\n\t}\n"];

export function gql(source: string): unknown;
export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;