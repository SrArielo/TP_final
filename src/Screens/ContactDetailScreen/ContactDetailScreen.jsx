import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ContactDetailContext } from '../../Context/ContactDetailContext';
import LoaderSpinner from '../../Components/LoaderSpinner/LoaderSpinner';
import "../../assets/styles/ContactDetailScreen.css";

export default function ContactDetailScreen() {
  const { contact_id } = useParams();
  const { loadContact, contact_detail, isLoadingContactDetail } = useContext(ContactDetailContext);
  const navigate = useNavigate();

  useEffect(() => {
    loadContact(contact_id);
  }, [contact_id]);

  if (isLoadingContactDetail || !contact_detail) {
    return <LoaderSpinner />;
  }

  return (
    <div className="contact-detail-container-1">
      {/* Flecha para volver */}
      <button className="back-button" onClick={() => navigate(-1)}>
        &#8592;
      </button>

      <div className="contact-header-1">
        <img
          src={contact_detail.img}
          alt={contact_detail.name}
          className="contact-detail-avatar-1"
        />
        <h2>{contact_detail.name}</h2>
      </div>

      <div className="contact-actions-1">
        <div className="action-button-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#057a55" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21.94 2 13.87 2 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" />
          </svg>
          <span>Llamar</span>
        </div>
        <div className="action-button-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#057a55" viewBox="0 0 24 24">
            <path d="M17 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-4.5l4 4v-11l-4 4z" />
          </svg>
          <span>Video</span>
        </div>
        <div className="action-button-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#057a55" viewBox="0 0 24 24">
            <path d="M10 2a8 8 0 105.293 14.293l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z" />
          </svg>
          <span>Buscar</span>
        </div>
      </div>

      <div className="contact-info-section-1">
        <div className="detail-section-1">
          <h3>Notificaciones</h3>
          <p>Desactivadas</p>
        </div>

        <div className="detail-section-1">
          <h3>Visibilidad de archivos multimedia</h3>
          <p>Desactivada</p>
        </div>

        <div className="detail-section-1">
          <h3>Mensajes conservados</h3>
          <p>Los mensajes se guardan localmente en tu dispositivo</p>
        </div>

        <div className="detail-section-1">
          <h3>Cifrado</h3>
          <p>Los mensajes y las llamadas están cifrados de extremo a extremo</p>
        </div>

        <div className="detail-section-1">
          <h3>Mensajes temporales</h3>
          <p>Activá para que los mensajes se borren automáticamente</p>
        </div>

        <div className="detail-section-1">
          <h3>Restringir chat</h3>
          <p>Restringe y oculta este chat en este dispositivo</p>
        </div>
      </div>
    </div>
  );
}