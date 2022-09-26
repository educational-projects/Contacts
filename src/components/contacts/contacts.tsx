import React, { ReactNode, useState } from 'react';
import styles from './contacts.module.scss';
import { ContactItem, Modal, AddContact } from '..';
import { useAppSelector } from '../../hook';
import { ReactComponent as AddIcon } from './Add.svg';
import { ContactsProps } from './contacts.props';

export function Contacts({ isSearch }: ContactsProps):JSX.Element {
  const [openModal, setOpenModal] = useState(false);
  const contacts = useAppSelector((state) => state.contacts.contacts);

  const renderPlugContent = (): ReactNode => {
    if (isSearch) {
      return (
        <h2 className={styles.contactsTitle}>по вашему запросу ничего не найдено</h2>
      );
    }

    return (
      <h2 className={styles.contactsTitle}>список контактов пуст, добавьте контакт</h2>
    );
  };

  return (
    <section className={styles.contacts}>
      <div className="container">
        <h2 className={styles.title}>
          Добавить новый контакт
          {' '}
          <button
            type="button"
            className={styles.newContact}
            aria-label="Добавить контакт"
            onClick={() => setOpenModal(true)}
          >
            <AddIcon width="30px" height="30px" />
          </button>
        </h2>
        {contacts.length ? (
          <ul className={styles.contactsList}>
            {contacts.map((contact) => (
              <ContactItem
                key={contact.id}
                contact={contact}
              />
            ))}
          </ul>
        )
          : renderPlugContent()}
      </div>
      {openModal && (
      <Modal onClose={() => setOpenModal(false)}>
        <AddContact onClose={() => setOpenModal(false)} />
      </Modal>
      )}
    </section>
  );
}
// export function Contacts({ isSearch }: ContactsProps):JSX.Element {
//   const [openModal, setOpenModal] = useState(false);
//   const contacts = useAppSelector((state) => state.contacts.contacts);

//   return (
//     <section className={styles.contacts}>
//       <div className="container">
//         <h2 className={styles.title}>
//           Добавить новый контакт
//           {' '}
//           <button
//             type="button"
//             className={styles.newContact}
//             aria-label="Добавить контакт"
//             onClick={() => setOpenModal(true)}
//           >
//             <AddIcon width="30px" height="30px" />
//           </button>
//         </h2>
//         {contacts.length ? (
//           <ul className={styles.contactsList}>
//             {contacts.map((contact) => (
//               <ContactItem
//                 key={contact.id}
//                 contact={contact}
//               />
//             ))}
//           </ul>
//         )
//           : (
//             <h2
//               className={styles.contactsTitle}
//             >
//               список контактов пуст
//             </h2>
//           )}
//       </div>
//       {openModal && (
//       <Modal onClose={() => setOpenModal(false)}>
//         <AddContact onClose={() => setOpenModal(false)} />
//       </Modal>
//       )}
//     </section>
//   );
// }
