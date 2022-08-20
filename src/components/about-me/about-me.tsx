import React from 'react';
import styles from './about-me.module.scss';

export function AboutMe(): JSX.Element {
  return (
    <section className={styles.aboutMe}>
      <div className="container">
        <h2 className={styles.title}>Обо мне</h2>
        <div className={styles.informationWrapper}>
          <div className={styles.information}>
            <img
              className={styles.image}
              src="https://imgholder.ru/300x400/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson"
              alt="Разработчик"
            />
            <div className={styles.info}>
              <div className={styles.infoItem}>
                <h3 className={styles.infoItemTitle}>Персональные данные</h3>
                <p className={styles.infoItemText}>Полное имя: Тихонов Дмитрий Викторович</p>
                <p className={styles.infoItemText}>Дата рождения: 16 декабря 1993</p>
                <p className={styles.infoItemText}>Гражданство: Россия</p>
                <p className={styles.infoItemText}>Место проживания: Кондопога</p>
              </div>
              <div className={styles.infoItem}>
                <h3 className={styles.infoItemTitle}>Прочее</h3>
                <p className={styles.infoItemText}>
                  Успешно закончил профессию &laquo;React&nbsp;разработчик&raquo; от HTML Academy
                </p>
                <p className={styles.infoItemText}>
                  Люблю делать фронтенд и требователен к своему коду
                </p>
                <p className={styles.infoItemText}>
                  Активно слежу за новостями в ИТ индустрии
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
