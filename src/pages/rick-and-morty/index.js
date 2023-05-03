import Image from 'next/image';
import Link from 'next/link';
import css from '@/styles/Characters.module.css';

const RickAnMorty = ({ results }) => {
	return (
		<article className={css.characters__container}>
			{results.map((character) => {
				return (
					<section key={character.id}>
						<h2>{character.name}</h2>
						<Link href={`/rick-and-morty/${character.id}`}>
							<Image src={character.image} width={300} height={250} alt='character' />
						</Link>
					</section>
				);
			})}
		</article>
	);
};

export async function getServerSideProps(context) {
	const response = await fetch('https://rickandmortyapi.com/api/character', {
		method: 'GET',
	});
	const { results } = await response.json();
	return {
		props: {
			results,
		},
	};
}

export default RickAnMorty;
