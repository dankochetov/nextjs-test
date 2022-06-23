import { gql } from '@app/gql';
import ReactMarkdown from 'react-markdown';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { once } from 'lodash';

import client from '~/graphql/client';

interface Props extends InferGetStaticPropsType<typeof getStaticProps> {}

const Article: React.FC<Props> = ({ data }) => {
	return (
		<>
			<h1>{data.heading}</h1>
			<h2>{data.sub_heading}</h2>
			<ReactMarkdown
				rehypePlugins={[rehypeRaw]}
				remarkPlugins={[remarkGfm]}
			>
				{data.content!}
			</ReactMarkdown>
		</>
	);
};

export default Article;

const articleQuery = gql(`#graphql
	query Article($slug: String!) {
		articles(filter: { slug: { _eq: $slug } }) {
			heading
			sub_heading
			content
		}
	}
`);

const articleSlugsQuery = gql(`#graphql
	query ArticleSlugs {
		articles {
			slug
		}
	}
`);

export const getStaticPaths = once(async () => {
	console.log('getStaticPaths');

	const { data } = await client.query(articleSlugsQuery).toPromise();
	const paths = data!.articles!.map((article) => ({
		params: { slug: article!.slug!.replace(/^\//, '').split('/') },
	}));

	return {
		paths,
		fallback: true,
	};
});

export async function getStaticProps(
	ctx: GetStaticPropsContext<{ slug: string[] }>,
) {
	const { data } = await client
		.query(articleQuery, {
			slug: `/${ctx.params!.slug.join('/')}`,
		})
		.toPromise();

	return {
		props: {
			data: data!.articles![0]!,
		},
	};
}
