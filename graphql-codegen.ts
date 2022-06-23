import { generate } from '@graphql-codegen/cli';
import 'dotenv/config';

async function main() {
	generate({
		schema: [
			{
				'https://apiv3.bookphysio.com/graphql': {
					method: 'GET',
					headers: {
						Authorization: `Bearer ${process.env.DIRECTUS_API_TOKEN}`,
					},
				},
			},
		],
		documents: ['**/*.{ts,tsx}', '!graphql/generated/**/*'],
		generates: {
			'graphql/generated': {
				preset: 'gql-tag-operations-preset',
				plugins: [],
			},
			'graphql/generated/schema.graphql': {
				plugins: ['schema-ast'],
			},
		},
	});
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
