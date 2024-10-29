import styles from '@/styles/style.module.scss';
import Image from 'next/image';
import logo from '@/../public/BYtemeuhLogo.webp';
import Link from 'next/link';

export default function Home() {
  return <>
    <header>
      <Image src={logo} alt="Logo Bytemeuh" width="150" />
      <h1>Bienvenue sur Bytemeuh</h1>
      <p>La création visuelle avec une touche de technologie et d'humour !</p>
    </header>

    <main className={styles.container}>
      <section>
        <h2>Qu'est-ce que Bytemeuh ?</h2>
        <p>Bytemeuh est un espace dédié aux passionnés de création visuelle et numérique. Sur Bytemeuh, nous partageons des articles uniques expliquant comment chaque image est créée, avec une touche d'humour et d'inspiration tech. Que vous soyez graphiste, photographe, illustrateur, ou simplement curieux, Bytemeuh propose des articles captivants qui décryptent les secrets derrière des visuels originaux.</p>
      </section>

      <section>
        <h2>Découvrez Nos Dernières Créations</h2>
        <p>Avec Bytemeuh, plongez dans des créations uniques, que ce soit de l'art digital, de la photographie retouchée ou du design génératif. Chaque article détaille l'inspiration, le processus et les outils utilisés pour réaliser l'image. Nous vous guidons étape par étape pour que vous puissiez comprendre, apprendre et même recréer certaines de nos idées.</p>
        <Link href="#articles" className={styles.btn}>Voir les articles</Link>
      </section>

      <section>
        <h2>Pourquoi Bytemeuh ?</h2>
        <p>Bytemeuh est né de l'envie de fusionner technologie et créativité, avec une dose d'humour. Le terme 'Bytemeuh' évoque cette fusion : 'Byte' pour le numérique, et 'Meuh' pour le côté décalé et accessible. Chez Bytemeuh, nous pensons que l'art visuel doit être partagé, expliqué et apprécié par tous, dans une ambiance à la fois geek et amusante.</p>
      </section>

      <section>
        <h2>Suivez Bytemeuh sur les réseaux sociaux</h2>
        <p>Pour ne rien manquer de nos dernières publications et pour découvrir en avant-première nos nouvelles créations, suivez-nous sur <Link href="https://www.instagram.com/bytemeuh/" target="_blank">Instagram</Link> !</p>
      </section>
    </main>

    <footer className={styles.container}>
      <p>&copy; 2024 Bytemeuh - Création Visuelle et Humour Tech</p>
    </footer>
  </>;
}
