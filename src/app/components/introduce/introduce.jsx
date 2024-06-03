import styles from "./introduce.module.scss"


function Introduce() {
  return (
    <section className={styles.introduce}>
    
      <h1 className={styles.introTitle}>
        <span className={styles.introGreeting}>Hi !,</span><br/>
        <span className={styles.introNameIntro}>my name is,</span><br/>
        <span className={styles.introName}>Heriberto Lara,</span><br/>
        <span className={styles.introProfession}>I am  Frontend Developer</span>
      </h1>
    </section>
  );
}

export default Introduce;
