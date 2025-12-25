import styles from "./Styles/index.module.css";

export default function Card() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.card}>
          <div>
            <img
              className={styles.image}
              src="../../../public/star-wars.jpg"
              alt="Imagem de Star Wars"
            />
          </div>
          <div className={styles.textCard}>
            <h1>Pôster do filme Star Wars</h1>
            <p className={styles.description}>
              Um pôster decorativo épico do filme Star Wars, com moldura de MDF
              e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes
              de todos os tempos. Este clássico pôster trará aventura, nostalgia
              e a magia de Star Wars para qualquer lugar que você decidir
              pendurar. Não perca a chance de adicionar essa linda memória ao
              seu acervo!
            </p>
            <button className={styles.button}>Comprar agora!</button>
          </div>
        </div>
      </div>
    </>
  );
}
