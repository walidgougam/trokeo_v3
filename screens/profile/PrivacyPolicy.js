import React from 'react';
import {View, Text, SafeAreaView, Button, StyleSheet,Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import HeaderComponent from '../../component/header/HeaderComponent';

function PrivacyPolicy({navigation}) {
  const hello = (walid) => {
    return <View>console</View>;
  };
  return (
    <View>
      <HeaderComponent navigation={navigation} />
      <ScrollView>
        <View>
          <Text style={styles.title}>Politique de confidentialité</Text>
          <Text style={styles.title}>
            Charte des données à caractère personnel à destination des
            utilisateurs de Trokeo présent ici 
          </Text>
          <Button title="go" onPress={()=>Linking.openURL('https://blog.goodbarber.com/docs/Privacypolicy/PrivacyPolicy.pdf')}/>
          <Text style={styles.title}>Mise à jour au 29 aout 2020</Text>
          <Text style={styles.title}>
            TITRE I : LA PROTECTION DES DONNEES PERSONNELLES
          </Text>
          <Text style={styles.text}>
            trokeo s’engage, dans le cadre de son activité, à accorder le
            maximum d’attention à la sécurité et à la confidentialité des
            informations en sa possession et à protéger les données personnelles
            des utilisateurs de ses services, en ce compris les visiteurs,
            conformément aux lois et règlements en vigueur, notamment la Loi
            Informatique et Libertés n°78-17 du 6 Janvier 1978 modifiée et le
            Règlement n°2016/679 du Parlement européen et du Conseil du 27 avril
            2016 relatif à la protection des personnes physiques à l’égard du
            traitement des données à caractère personnel et à la libre
            circulation de ces données.
          </Text>
          <Text style={styles.title}>Article 1.Informations générales</Text>
          <Text style={styles.text}>
            Dans le cadre de ses activités et sur le fondement de son intérêt
            légitime, la société Trokeo collecte et traite des données à
            caractère personnel. Ces données collectées sont nécessaires pour
            que la société Trokeo puisse mener ses activités et vous proposer
            des solutions pour favoriser le don et la récupération d’objets et
            de denrées alimentaires entre particuliers.
          </Text>
          <Text style={styles.title}>
            Article 2.Identité du responsable de traitement
          </Text>
          <Text style={styles.text}>
            Le responsable de traitement des données à caractère personnel qui
            sont collectées est Trokeo, société par actions simplifiées
            immatriculée au registre du commerce et des sociétés de Bordeaux
            sous le numéro 818 683 013 et dont le siège social est situé 60 rue
            singer 75016 Paris, représentée par son représentant légal en
            exercice.
          </Text>
          <Text style={styles.title}>Article 3.Type de données collectées</Text>
          <Text style={styles.title}>
            3.1. Les données directement communiquées par les utilisateurs
          </Text>
          <Text style={styles.text}>
            Les données personnelles des utilisateurs sont collectées et
            traitées lorsque les utilisateurs s’inscrivent sur l’application ou
            le site de Trokeo et remplissent le formulaire prévu à cet effet.
            Les informations fournies par les utilisateurs incluent, sans s’y
            limiter, la photo de profil, le nom, prénom, l’adresse email, la
            date de naissance et le sexe. L’utilisateur peut choisir de
            communiquer ses coordonnées de géolocalisation via la fonctionnalité
            de géolocalisation des annonces du site et de l’application Trokeo,
            en cliquant sur le bouton prévu à cet effet. En cas de souscription
            à l’option payante Trokeo+, Trokeo traite et collecte les données
            bancaires communiquées à cet effet.
          </Text>
          <Text style={styles.title}>
            3.2. Les données collectées automatiquement
          </Text>
          <Text style={styles.text}>
            Trokeo collecte automatiquement certaines informations sur les
            utilisateurs lorsqu’ils utilisent l’application ou le site de Trokeo
            ou lorsqu’ils consultent le site ou l’application précitée sans
            s’identifier. Sont automatiquement collectées, sans s’y limiter : le
            type de navigateur utilisé, le système d’exploitation, l’adresse IP
            ou MAC, l’identifiant publicitaire, le langage sélectionné et, sous
            réserve d’acceptation, les données de géolocalisation. Les choix
            dont disposent les utilisateurs concernant la collecte automatique
            d’information sont repris à l’Article « Recueil du consentement des
            utilisateurs » de la présente politique de confidentialité.
          </Text>
          <Text style={styles.title}>Article 4. Finalités du traitement</Text>
          <Text style={[styles.underline, {textDecorationLine: 'underline'}]}>
            Fonctionnement et utilisation du service
          </Text>
          <Text style={styles.text}>
            Les données des utilisateurs sont recueillies par Trokeo lors de la
            création du compte de l’utilisateur lorsqu’il remplit le formulaire
            d’inscription, lors de sa navigation dans le service et/ou lors de
            la création d’une annonce. Ces données à caractère personnel sont
            collectées pour les fins suivantes :
          </Text>
          <Text style={styles.text}>
            * la gestion, la validation, la publication et le suivi de l’annonce
            de l’utilisateur ; * la fourniture de l’option payante Trokeo+ ; *
            l’envoi de formulaires de réponses aux utilisateurs ; * l’envoi
            d’informations sur la modification ou l’évolution de nos services ;
            * l’envoi de propositions commerciales et/ou promotionnelles,
            émanant uniquement de Trokeo ; * la personnalisation des contenus
            publicitaires affichés sur le site et l’application de Trokeo en
            fonction de vos centres d’intérêt ou de votre environnement proche ;
            * la gestion de la relation utilisateur ; * la gestion de l’exercice
            de vos droits sur vos données personnelles, dans les conditions
            prévues à l’article 9 ; * la mise à disposition d’outils de partage
            sur les réseaux sociaux ; * la collecte d’informations statistiques
            sur l’utilisation du service par les utilisateurs ; * l’envoi
            d’enquêtes de satisfaction et analyses statistiques.
          </Text>
          <Text style={[styles.text, {textDecorationLine: 'underline'}]}>
            Personnalisation des publicités et marketing ciblé
          </Text>
          <Text style={styles.text}>
            Dans l’Application Trokeo, nos partenaires publicitaires peuvent
            collecter vos données de géolocalisation. Les données sont
            collectées par notre partenaire Singlespot, pour son compte ou pour
            le compte de ses clients, lors de l’activation de systèmes de
            géolocalisation de votre terminal mobile et moyennant votre accord
            préalable et exprès. Ces services de géolocalisation utilisent des
            données anonymes, telles que notamment les signaux GPS, les capteurs
            du terminal, les points d’accès WIFI et les identifiants des
            antennes relais, pour dériver ou estimer la position précise de
            votre terminal mobile. Ces données sont collectées aux fins
            d’afficher sur le terminal mobile des annonces publicitaires ciblées
            en fonction de la géolocalisation du terminal, ou alors à des fins
            de réalisation d’études marketing et commerciales. Ces données
            pourront être transférées à des tiers pour ces mêmes finalités. Les
            données sont anonymisées et à aucun moment nous ne transmettons vos
            noms et prénoms à nos partenaires. Vos données de géolocalisation
            peuvent être associées à votre identifiant publicitaire.
            L’identifiant publicitaire est un identifiant unique attaché à un
            mobile, lequel peut être réinitialisé à n’importe quel moment par
            l’utilisateur en suivant la procédure suivante : – Pour iOS : allez
            dans les “Réglages”, puis dans “Confidentialité”, puis dans
            “Publicité” puis dans “Réinitialiser l’identifiant de publicité” ; –
            Pour Android : allez dans “Paramètres Google” (ou “Paramètres” puis
            “Google”), puis dans “Annonces”. Le responsable de traitement pour
            ces finalités et la société Singlespot SAS, RCS de Paris N°809 644
            347, 33 rue La Fayette – 75009 Paris, pour plus d’informations,
            cliquez ici https://www.singlespot.com/privacy_policy?locale=fr ;
            vos droits (droits d’accès, d’opposition, d’effacement, etc.)
            peuvent être exercés directement auprès du DPO de Singlespot par
            e-mail (privacy@singlespot.com) ou par courrier (Data Protection
            Officer, Singlespot 33 rue la Fayette à Paris (75009)); les durée de
            conservation de Singlespot se décomposent en deux périodes
            distinctes au cours de laquelle les données de géolocalisation sont
            de moins en moins précises : les données de géolocalisation telles
            que collectées sont conservées pendant une durée de 30 jours ; des
            visites en points d’intérêts sont conservées pendant 6 mois.
          </Text>
          <Text style={styles.title}>
            Article 5. Lieu du traitement des données
          </Text>
          <Text style={styles.text}>
            Le traitement des données collectées par Trokeo a lieu dans l’Union
            européenne. Toutefois, il est possible de manière marginale que
            certaines données recueillies soient transférées dans d’autres pays
            (en particulier aux Etats-Unis). En cas de transfert de ce type,
            Trokeo s’assure de ce que le traitement soit effectué conformément à
            la présente politique de confidentialité et qu’il soit encadré par
            les clauses contractuelles types de la Commission européenne qui
            permettent de garantir un niveau de protection suffisant de la vie
            privée et des droits fondamentaux des personnes, et/ou de l’adhésion
            des partenaires concernées situés aux Etats-Unis à l’accord de
            Privacy Shield.
          </Text>
          <Text style={styles.title}>Article 6. Destinataires des données</Text>
          <Text style={styles.text}>
            Certaines des données personnelles collectées par Trokeo pourront
            être transmises à des sous-traitants afin d’assister Trokeo dans la
            réalisation de ses activités. Ces prestataires ont un accès limité
            aux données strictement nécessaires pour accomplir les tâches pour
            le compte de Trokeo. Ils sont par ailleurs contraints
            contractuellement de les protéger et de les utiliser uniquement aux
            fins pour lesquelles elles ont été communiquées et conformément à la
            présente Charte. Si vous l’avez autorisé, certaines données
            personnelles collectées peuvent être transmises à des tiers à des
            fins de personnalisation des publicités et de marketing ciblé,
            conformément aux finalités énoncées ci-dessus (Article 4 : «
            Finalités du traitement »). Les données de géolocalisation
            notamment, en cas d’autorisation, peuvent être transmises à
            Singlespot (https://www.singlespot.com/privacy_policy?locale=fr) ou
            à ses partenaires.
          </Text>
          <Text style={styles.title}>
            Article 7. Durée de conservation des données
          </Text>
          <Text style={styles.text}>
            La durée de conservation de vos données personnelles varie en
            fonction de la finalité de la collecte. Les données à caractère
            personnel recueillies à des fins de bon fonctionnement et
            utilisation du service sont conservées tant que l’utilisateur
            dispose d’un compte. Les données à caractère personnel recueillies à
            des fins de personnalisation des publicités et de marketing ciblé
            (hors données de géolocalisation) sont conservées pour une durée
            maximale de 13 mois. Les données de géolocalisation recueillies à
            des fins de personnalisation des publicités et de marketing ciblé
            sont conservées pour une durée maximale de 6 mois, après quoi les
            données peuvent faire l’objet d’une anonymisation et être conservées
            à des fins statistiques.
          </Text>
          <Text style={styles.title}>Article 8. Sécurisation des données</Text>
          <Text style={styles.text}>
            Trokeo assure la confidentialité, l’intégrité et la sécurité des
            données qui lui sont confiées en mettant en œuvre les mesures
            organisationnelles et techniques appropriées, ainsi qu’une
            protection informatique renforcée. Les sous-traitants auxquels fait
            appel Trokeo s’engagent également à assurer un haut niveau de
            protection des données.
          </Text>
          <Text style={styles.title}>
            Article 9. Exercice des droits des personnes concernées
          </Text>
          <Text style={styles.text}>
            L’utilisateur auquel se réfèrent les données personnelles bénéficie
            à tout moment d’un droit d’accès, de rectification et de suppression
            ainsi qu’une portabilité de ses données à caractère personnel
            faisant l’objet du présent traitement. L’utilisateur a également la
            possibilité de s’opposer à ce dernier ou d’en demander une
            limitation. Les demandes de mise en œuvre de ces droits devront être
            transmises à la société Trokeo à l’adresse email :
            trokeo12@gmail.com, accompagnées d’un justificatif d’identité.
            L’utilisateur a également le droit d’obtenir du responsable du
            traitement la confirmation que des données à caractère personnel le
            concernant sont ou ne sont pas traitées et, lorsqu’elles le sont,
            l’accès auxdites données à caractère personnel ainsi que les
            informations suivantes : – les finalités du traitement ; – les
            catégories de données à caractère personnel concernées ; – les
            destinataires ou catégories de destinataires auxquels les données à
            caractère personnel ont été ou seront communiquées, en particulier
            les destinataires qui seraient établis dans des pays tiers ; –
            lorsque cela est possible, la durée de conservation des données à
            caractère personnel envisagée ou, lorsque ce n’est pas possible, les
            critères utilisés pour déterminer cette durée ; – le droit
            d’introduire une réclamation auprès d’une autorité de contrôle. En
            cas d’exercice des droits ci-dessus auprès de Trokeo, la société
            Trokeo fournit une copie des données à caractère personnel faisant
            l’objet d’un traitement et peut exiger le paiement de frais
            raisonnables basés sur les coûts administratifs pour toute copie
            supplémentaire demandée par l’intéressé.
          </Text>
          <Text style={styles.title}>
            Article 10. Réclamation auprès de la CNIL
          </Text>
          <Text style={styles.text}>
            L’intéressé peut également introduire une réclamation auprès de la
            Commission Nationale de l’Informatique et des Libertés dont le siège
            social est situé au 3 Place de Fontenoy – TSA 80715 – 75334 PARIS
            CEDEX 07. Téléphone : 01 53 73 22 22. Il est également possible de
            déposer une plainte en ligne à l’adresse suivante :
            https://www.cnil.fr/fr/plaintes.
          </Text>
          <Text style={styles.title}>
            Article 11. Modifications apportées à la présente Politique de
            confidentialité
          </Text>
          <Text style={styles.text}>
            Trokeo se réserve le droit de mettre à jour sa politique de
            confidentialité et ce à tout moment. Tout changement sera publié sur
            le site et l’application de Trokeo.
          </Text>
          <Text style={styles.title}>
            TITRE II : INFORMATIONS GENERALES SUR LES LIENS HYPERTEXTES ET
            COOKIES
          </Text>
          <Text style={styles.text}>
            Lorsque vous accédez à la plateforme de Trokeo, notre système et
            celui de certains de nos prestataires utilisent des cookies pour
            identifier les préférences des visiteurs. Le terme de cookies est à
            prendre au sens large et couvre l’ensemble des traceurs déposés
            et/ou lus lors de la consultation d’un site internet ou d’une
            application mobile par exemple. Un cookie est un fichier de petite
            taille, qui ne permet pas l’identification de l’utilisateur, mais
            qui enregistre des informations relatives à la navigation d’un
            ordinateur ou d’un périphérique. Pour en savoir plus sur les cookies
            et leur incidence sur vous et votre expérience de navigation,
            consultez le site de la CNIL :
            https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser.
          </Text>
          <Text>
            • Utilisation des cookies sur la plateforme de Trokeo : Trokeo
            utilise le type de cookies suivants : Cookies fonctionnels ou de
            session : ce sont les cookies qui collectent des informations et qui
            s’assurent que le site et l’application mobile sont chargés
            correctement lorsque vous y accédez via votre navigateur. Les
            cookies de session sont automatiquement détruits lorsque
            l’utilisateur ferme son navigateur. Cookies analytiques ou de
            performance : il s’agit des cookies tiers créés par Google Analytics
            qui recueillent des renseignements statistiques sur l’accès au site
            et qui nous permettent de connaître l’utilisation et les
            performances de notre site et d’en améliorer le fonctionnement.
            Cookies publicitaires de tierces parties : ce sont les cookies de
            parties tierces (donc non créés à partir de ce site, mais à partir
            de sites partenaires externes) qui mémorisent les préférences de
            l’utilisateur, sur les produits par exemple, et qui sont ensuite
            utilisés pour envoyer des messages publicitaires ciblés à partir des
            préférences et des choix qui ressortent de la navigation de chaque
            utilisateur. Recueil du consentement des utilisateurs : Le recours
            aux cookies techniques et fonctionnels ne peut être désactivé
            puisqu’il s’agit de cookies strictement nécessaires à la fourniture
            d’un service expressément demandé par l’utilisateur. En revanche,
            l’utilisation de cookies publicitaires de tierces parties ainsi que
            les cookies de partage sur les réseaux sociaux nécessitent le
            consentement préalable de l’utilisateur. Un bandeau d’information
            vous informe de l’utilisation de ces cookies à votre arrivée sur la
            page d’accueil de notre site Internet et application mobile. Vous
            pouvez retirer votre consentement à tout moment via l’onglet «
            Paramètres » de notre site internet ou le centre d’aide de
            l’application mobile Trokeo. Le refus de ces cookies tiers n’a pas
            d’impact sur l’utilisation de notre site. Cependant le fait de les
            refuser n’entraînera pas l’arrêt de la publicité sur notre site ou
            sur Internet. Cela aura seulement pour effet d’afficher une
            publicité qui ne tiendra pas compte de vos centres d’intérêt ou de
            vos préférences. • Durée de conservation des cookies : La durée de
            conservation des cookies par Trokeo dépend du type de cookies : –
            les cookies de session sont automatiquement détruits lorsque
            l’utilisateur ferme son navigateur ; – les cookies d’analyses sont
            eux conservés 13 mois. – les cookies de tierces-parties et de
            partage sur les réseaux sociaux sont conservés 13 mois à compter du
            moment où le consentement a été recueilli. • Désactiver les cookies
            par le biais de votre navigateur : Vous pouvez configurer votre
            navigateur pour accepter ou rejeter tous les cookies ou tous types
            de cookies (tels que les cookies tiers) ou vous pouvez choisir
            d’être averti à chaque fois qu’un cookie est placé sur votre
            ordinateur. Le refus d’installation d’un cookie peut entrainer
            l’impossibilité d’accéder à certains services. Vous trouverez
            ci-dessous le lien à suivre, par navigateur, pour avoir les
            instructions vous permettant de configurer l’utilisation des cookies
            : – Microsoft Internet Explorer :
            https://support.microsoft.com/fr-fr/help/17442/windows-internet-explorer-delete-manage-cookies
            ; – Mozilla Firefox :
            https://support.mozilla.org/fr/kb/desactiver-cookies-tiers ; –
            GoogleChrome :
            https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=fr
            ; – Apple Safari:
            https://support.apple.com/fr-fr/guide/safari/sfri11471/mac
          </Text>
        </View>
      </ScrollView>
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

export default PrivacyPolicy;
