import React from 'react';
import {View, Text, SafeAreaView, Button, StyleSheet,Linking} from 'react-native';
import HeaderComponent from '../../component/header/HeaderComponent';

function TermsOfService({navigation}) {
  return (
    <View>
      <HeaderComponent navigation={navigation} />
      <Text style={styles.title}>Mentions légales</Text>
      <Text style={styles.title}>Éditeur</Text>
      <Text style={styles.text}>
        TROKEO SAS au capital de 5000€ 60 rue singer 75016 Paris
      </Text>
      <Text style={styles.title}>Directeur de la publication</Text>
      <Text style={styles.text}>Monsieur Guy BOUTROS</Text>
      <Text style={styles.title}>Hébergeur</Text>
      <Text style={styles.text}>
        Google Cloud Platform Gordon House, Barrow Street Dublin 4, Irlande
      </Text>
       <Button title="go" onPress={()=>Linking.openURL('https://blog.goodbarber.com/docs/Privacypolicy/PrivacyPolicy.pdf')}/>
      <Text style={styles.title}>
        Traitement des données à caractère personnel
      </Text>
      <Text style={styles.text}>
        TROKEO s’efforce de vous assurer que vos données personnelles sont
        protégées lorsque vous utilisez ses services. Notre Politique de
        Confidentialité décrit la façon dont vos données à caractère personnel
        sont traitées et protégées.
      </Text>
      <Text style={styles.title}>Contact</Text>
      <Text style={styles.text}>
        Vous pouvez contacter la société par mail à l’adresse
        trokeo12@gmail.com.
      </Text>
      <Text style={styles.title}>Conditions générales d'utilisation</Text>
      <Text style={styles.text}>
        En vigueur à compter du 24 août 2019 Les présentes conditions générales
        (les « Conditions Générales ») régissent l’utilisation de la plateforme
        TROKEO (la « Plateforme »), disponible au travers de l’application
        mobile dédiée téléchargeable sur Google Play ou sur Apple Store
        (ensemble désignée l’ « Application »). Ces Conditions Générales sont
        mises à la disposition des Utilisateurs sur le Site Internet et au sein
        de l’Application. Tout Utilisateur déclare avoir pris connaissance et
        accepté les présentes conditions générales pour toute utilisation de
        TROKEO.
      </Text>
      <Text style={styles.title}>1. DÉFINITIONS</Text>
      <Text style={styles.text}>
        “Annonceur” désigne tout Utilisateur qui propose un Article Donné,
        signale un Article Abandonné ou indique un Article Demandé.
        “Application” désigne indifféremment les applications mobiles Androïd©
        ou Apple© TROKEO, téléchargeables respectivement sur Google Play ou
        l’Apple Store permettant aux Utilisateurs d’accéder aux Services.
        “Niveau” désigne le niveau d’un Utilisateur – de 1 à 8 – déterminé selon
        les actions accomplies par cet Utilisateur via la Plateforme. “Article”
        désigne tout Article Donné, tout Article Demandé et/ou tout Article
        Abandonné. Les Articles peuvent être alimentaires (nourriture) ou
        non-alimentaires. Un Article sera présenté au sein de la Plateforme au
        sein de la section “Objets” ou de la section “Nourriture” en fonction de
        sa nature alimentaire ou non. “Article Abandonné” désigne tout objet
        abandonné au sein de l’espace public (n’ayant pas de propriétaire
        manifeste) et signalé par un Utilisateur. “Article Demandé” désigne tout
        objet et/ou bien consommable recherché en don par un Utilisateur et
        faisant l’objet d’une demande publique au sein de la section dédiée
        (“Demandes”) sur la Plateforme. “Article Donné” désigne tout objet et/ou
        bien consommable que son propriétaire propose au don sur la Plateforme.
        “Plateforme” désigne indistinctement l’Application et/ou le Site
        Internet. “Service” désigne le service proposé à tout Utilisateur sur la
        Plateforme leur permettant de proposer au don, de signaler pour
        récupération un bien, de faire des demandes ou de répondre à des
        annonces. “Société” désigne la société TROKEO, une société par actions
        simplifiée au capital de 5000euros, dont le siège social est situé à
        paris et immatriculée au RCS de Paris sous le numéro d’identification
        869 835 044. “Utilisateur” désigne tout utilisateur, personne physique
        majeure, particulier, de la Plateforme ou des Services y compris tout
        simple visiteur.
      </Text>
      <Text style={styles.title}>2. OBJET DES CONDITIONS GÉNÉRALES</Text>
      <Text style={styles.text}>
        Les présentes Conditions Générales définissent les conditions
        d’utilisation de la Plateforme et des Services par les Utilisateurs et
        les Annonceurs et régissent les relations entre les Utilisateurs du
        Service. En utilisant la Plateforme, tout Utilisateur déclare accepter
        les présentes Conditions Générales sans réserve et confirme expressément
        être une personne physique capable et non professionnelle. Les présentes
        Conditions Générales sont en conséquence opposables à tout Utilisateur.
        La Société se réserve le droit de modifier les présentes Conditions
        Générales. Elles seront applicables dès leur mise en ligne.
      </Text>

      <Text style={styles.title}>3. INSCRIPTION DES UTILISATEURS</Text>
      <Text style={styles.text}>
        Tout utilisateur déclare expressément être une personne physique majeure
        en s’inscrivant sur la Plateforme. Un Utilisateur dispose de deux
        options pour créer son compte et s’identifier : • Il peut utiliser une
        adresse e-mail, utilisée comme identifiant, et un mot de passe. • Il
        peut utiliser son ID Facebook et accepte à cet effet que soit communiqué
        à la Société les données du profil public Facebook, ainsi que son
        adresse e-mail. L’Utilisateur est seul responsable de son compte et de
        l’utilisation qu’il en fait. En créant un compte au sein de la
        Plateforme, l’Utilisateur déclare accepter les présentes Conditions
        Générales. Les modalités d’utilisation des données à caractère personnel
        des Utilisateurs par la Société sont stipulées à l’article 6 des
        présentes Conditions Générales.
      </Text>
      <Text style={styles.title}>4. MODALITÉS D’UTILISATION DU SERVICE</Text>
      <Text style={styles.title}>4.1 DESCRIPTION DES FONCTIONNALITÉS</Text>
      <Text style={styles.text}>
        Tout Utilisateur aura accès aux fonctionnalités suivantes selon les
        modalités stipulées aux présentes Conditions Générales : • publication
        d’une annonce relative à un Article Donné ou un Article Demandé, •
        signalement d’un Article Abandonné, • consultation des Articles et
        recherche par critère, • mise en place de recherches enregistrées
        relatives à des Articles aux caractéristiques particulières, • service
        de messagerie instantanée entre un Utilisateur et un Annonceur, •
        réalisation d’actions spécifiques améliorant le Niveau de l’Utilisateur.
      </Text>
      <Text style={styles.title}>4.2 PUBLICATION D’UNE ANNONCE</Text>
      <Text style={styles.text}>
        Tout Utilisateur peut publier une annonce proposant de donner un ou
        plusieurs Articles Donnés dont il est propriétaire ou signalant un
        Article Abandonné. L’Article concerné est localisé et décrit par
        l’Annonceur. L’Annonceur peut publier une ou plusieurs photos sur
        l’annonce. Tout Annonceur déclare expressément en publiant une annonce
        être le propriétaire de l’Article Donné concerné et s’engage à faire une
        description la plus fidèle possible de tout Article. Toute annonce est
        publiée pour une durée maximale de 90 jours pour un Article Donné
        alimentaire ou non-alimentaire et de 12h pour un Article Abandonné. Dans
        le cas d’une annonce pour un Article donné alimentaire, cette dernière
        reste publiée jusqu’à la date limite de consommation de l’Article
        renseignée par l’Utilisateur, dans la limite maximale de 90 jours. En
        publiant une annonce, tout Utilisateur accepte expressément que le
        contenu de cette annonce soit utilisé par la Société à des fins de
        communication et sa duplication sur tout site Internet exploité par la
        Société.
      </Text>
      <Text style={styles.title}>4.3 RÉCUPÉRATION D’UN ARTICLE</Text>
      <Text style={styles.text}>
        Tout Utilisateur a accès à la liste des Article, aux descriptifs et
        photos des Articles et au profil des Annonceurs. L’Annonceur a accès en
        temps réel à la liste des Utilisateurs intéressés par l’Article Donné
        qu’il propose et peut organiser avec l’Utilisateur de son choix les
        modalités de récupération de l’Article Donné.
      </Text>
      <Text style={styles.title}>
        4.4 RECHERCHES ET RECHERCHES ENREGISTREES
      </Text>
      <Text style={styles.text}>
        Tout Utilisateur peut effectuer des recherches par catégorie ou par
        mot-clé pour savoir si un Article répondant à des caractéristiques
        particulières est proposé ou a été signalé sur la Plateforme. Un
        Utilisateur peut paramétrer jusqu’à cinq recherches enregistrées à un
        moment donné relatives à des Articles répondant à des caractéristiques
        particulières. Les recherches enregistrées permettent à un Utilisateur
        d’effectuer une recherche plus facilement et de savoir si un Article
        recherché est proposé ou signalé.
      </Text>
      <Text>Conditions générales d'utilisation</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
  },
  text: {
    fontSize: 10,
  },
});

export default TermsOfService;
