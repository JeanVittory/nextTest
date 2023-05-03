import Image from 'next/image';
import css from '@/styles/Character.module.css';

const CharactersId = ({ characterRickMorty }) => {
	const { image, name, species, gender } = characterRickMorty;
	return (
		<div className={css.characters__container}>
			<h1>Detalle del personaje</h1>
			<div className={css.characters__item}>
				<Image src={image} width={500} height={400} alt='profile image' />
				<h2>{name}</h2>
				<p>{species}</p>
				<p>{gender}</p>
			</div>
		</div>
	);
};

export async function getServerSideProps({ params }) {
	const { characterId } = params;
	const apiRickMorty = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`, {
		method: 'GET',
	});
	const characterRickMorty = await apiRickMorty.json();
	return {
		props: {
			characterRickMorty,
		},
	};
}

export default CharactersId;
