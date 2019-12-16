/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import GoBack from '../../components/history/GoBack';
import './page.scss';
import HopitalImg from '../../assets/img/hopital.jpg';
import Pattern from '../../assets/img/greek-vase.png';

const Hopital = () => (
  <>
    <div className="page-container">
      <div className="page-image" style={{ backgroundImage: `url(${HopitalImg})` }} />
      <GoBack />
      <h1>
        <span className="h1-light">STAGE EN </span>
        HOPITAL
        <span className="h1-underline" />
      </h1>
      <p> Mon deuxième stage s’est passé dans un Hôpital dans un service d’addictologie pour les personnes dépendantes à l’alcool, aux drogues ou encore à certains médicaments. Durant ce stage, j’ai été en présence d’un autre public, des adultes, qui pour la plupart avaient entre 25 et moins de 40 ans. En arrivant dans ce service, je ne connaissais pas grand-chose à ce public, à ces pathologies et addictions. Pendant ce stage je devais principalement valider tout ce qui était soins d’hygiène et le reste c’était des choses en plus, mais moins prioritaires pour ce stage-là. J’ai cependant appris toutes les prises de constantes : température, saturation en oxygène, tension, pose d’un électrocardiogramme, et j’ai aussi appris à faire mes premières prises de sang. Ce stage m’a appris énormément de choses que ce soit dans le domaine technique, mais aussi par rapport aux traitements des personnes dépendantes à certaines substances, aux protocoles mis en place pour ces personnes, les manières d’aborder ces patients, leur façon de réagir etc. Le mot-clé de ce stage a été pour moi la confiance. Je dis cela parce que dans ce service, il y avait constamment une ambivalence entre doute et confiance. Quand les patients arrivaient, il y avait un protocole stricte, ils n’avaient, par exemple, pas le droit d’avoir des produits à base d’alcool dans leurs affaires que ce soit du parfum, du gel anti-bactérien etc et pas de médicaments non plus, ils avaient toute une liste d’objets interdits. Nous devions fouiller leurs affaires partiellement à leur admission mais nous devions surtout leur faire confiance car ils cachaient souvent des choses interdites, ils mettaient en place toutes sortes de stratégies pour cela malgré le fait qu’ils avaient signé des papiers attestant qu’ils respectaient le protocole. A chaque visite extérieure de leurs familles ou proches, nous devions refouiller les affaires. Quand nous trouvions les choses qu’ils cachaient, il y avait une entaille dans la relation de confiance que nous mettions en place et c’était parfois difficile d’accepter que les patients nous mentaient. Pour ma part, au début de ce stage j’étais assez naïve par rapport à tout ça et chaque fois, cette relation de confiance était mise à l’épreuve et j’ai appris à être vraiment objective et ne pas me laisser aller à la subjectivité quand les patients promettaient des choses. J’ai appris à me baser sur les faits et j’avoue que ça a été parfois difficile pour moi d’accepter que des patients m’aient menti. Bien sûr, je restais professionnelle et je ne montrais pas la déception que je pouvais parfois ressentir. Il fallait également les surveiller, chacun leur tour, dans leur prise de médicaments, ils devaient venir l’un après l’autre dans la salle de soins et prendre les médicaments devant nous. S’il y avait des médicaments à laisser fondre dans la bouche par exemple, ils devaient rester dans la pièce jusqu’à que le médicament soit passé et ouvrir la bouche pour nous montrer qu’ils avaient bien pris leurs traitements. Il y avait donc un gros travail de surveillance et nous devions toujours nous méfier d’une certaine manière.</p>

      <p>Quand je parlais de confiance, il y avait aussi le fait de devoir se faire confiance à soi-même, notamment quand j’ai dû faire mes premières toilettes dans ce service. La première étant faite à un homme âgé du service, il avait des problèmes d’alcool. J’ai dû cacher ma gêne, j’avoue qu’au départ j’ai vraiment appréhendé de laver cet homme. Il n’était pas dans un état de santé qui nécessitait de le laver dans le lit comme souvent en maison de retraite, lui, il tenait bien debout et était assez dynamique quand même, j’ai donc dû le doucher. Cet homme blaguait pour détendre l’atmosphère, je pense qu’il avait senti mon appréhension, il m’a dit : « Ne faites pas attention à mon petit oiseau, il est vieux et fripé. » J’aurais pu être encore plus gênée suite à ces paroles, mais j’ai en fait compris que lui aussi était gêné et je me suis donc détendue et lancée, j’ai effectué la toilette de cet homme dans une grande bienveillance et douceur et tout s’est bien déroulé. Je me souvenais de ce que nous avions appris en cours, il fallait parler aux patients pour les détendre pendant une toilette, leur demander à chaque étape si tout allait bien, si la température de l’eau leur convenait, il fallait penser à les couvrir avec une serviette avant d’aller chercher leurs vêtements pour ne pas faire atteinte à leur pudeur etc. Finalement, toutes les choses qui me semblaient délicates à la base se sont déroulées de manière naturelle et nous parlions pendant tous les soins et j’en ai même oublié que le patient était nu face à moi, il y avait une atmosphère plutôt détendue et chaleureuse. L’aide-soignante qui m’assistait et me regardait faire était satisfaite de mon travail et m’a dit qu’on ne voyait pas que j’étais gênée pour une première toilette complète toute seule, cela m’a rassurée et j’ai pris plus confiance en moi, cela m’a servi pour les toilettes et soins suivants. </p>

      <h1>
        <span className="h1-light">COMPÉTENCES </span>
        DIRECTES
        <span className="h1-underline" />
      </h1>

      <div className="page-grid-container">
        <div className="competences-vignette">
          <div className="competences-title" style={{ backgroundImage: `url(${Pattern})` }}>
            <h2>Compétences techniques</h2>
          </div>
          <div className="competences-description">
            <p>
              Connaissance des règles, des procédures/protocoles et vocabulaire du domaine hospitalier et plus particulièrement dans un service d’addictologie ; connaître les différents types d’addictions ; connaître les différents traitements pour personnes dépendantes à des substances ; savoir-faire des soins techniques : toilettes, administrer des médicaments, prises des constantes, prises de sang, savoir suivre les ordonnances du médecin.
            </p>
          </div>
        </div>
        <div className="competences-vignette">
          <div className="competences-title" style={{ backgroundImage: `url(${Pattern})` }}>
            <h2>Compétences relationnelles</h2>
          </div>
          <div className="competences-description">
            <p>
            Travailler en équipe ; écoute : la capacité à entrer dans le monde de l’autre/du patient sans pour autant être forcément en accord ; communication ; savoir définir une posture face à un public varié (patients, familles, collègues).
            </p>
          </div>
        </div>
        <div className="competences-vignette">
          <div className="competences-title" style={{ backgroundImage: `url(${Pattern})` }}>
            <h2>Compétences comportementales</h2>
          </div>
          <div className="competences-description">
            <p>
            Adaptation aux patients dépendants à l’alcool, aux drogues ou autres substances qui sont souvent « à fleur de peau », adaptation aux situations d’urgence.
            </p>
          </div>
        </div>
        <div className="competences-vignette">
          <div className="competences-title" style={{ backgroundImage: `url(${Pattern})` }}>
            <h2>Compétences d’analyse</h2>
          </div>
          <div className="competences-description">
            <p>
            Observation : surveillance des patients, de leurs comportements, de leur application des règles ; capacité d’analyse : comprendre les besoins des patients, savoir comprendre comment les patients vivent leur sevrage en observant les signes physiques et physiologiques.
            </p>
          </div>
        </div>
        <div className="competences-vignette">
          <div className="competences-title" style={{ backgroundImage: `url(${Pattern})` }}>
            <h2>Compétences organisationnelles</h2>
          </div>
          <div className="competences-description">
            <p>
            Savoir mener et suivre une réunion avec les autres soignants et personnels ; savoir se situer par rapport à une hiérarchie ; savoir interagir avec d’autres professionnels (médicaux et paramédicaux).
            </p>
          </div>
        </div>
      </div>

      <h1>
        <span className="h1-light">COMPÉTENCES </span>
        INDIRECTES
        <span className="h1-underline" />
      </h1>

      <div className="page-grid-container">
        <div className="competences-vignette">
          <div className="competences-title" style={{ backgroundImage: `url(${Pattern})` }}>
            <h2>Compétences relationnelles</h2>
          </div>
          <div className="competences-description">
            <p>
            Savoir communiquer avec tous les patients : la capacité à établir le rapport avec une personne et à s’intéresser à elle pour faciliter l’échange et la communication ; savoir rassurer les patients ; savoir être objectif dans la relation de confiance que nous mettons en place avec les patients.
            </p>
          </div>
        </div>
        <div className="competences-vignette">
          <div className="competences-title" style={{ backgroundImage: `url(${Pattern})` }}>
            <h2>Compétences comportementales</h2>
          </div>
          <div className="competences-description">
            <p>
            Adaptation : savoir s’adapter aux situations nouvelles, inédites, jamais rencontrées, savoir s’adapter aux familles des patients et aux collègues, connaître ses patients pour s’adapter au mieux à leurs besoins ; savoir prendre sur soi dans des moments qui nous touchent comme la mort d’un patient par exemple ; savoir garder son sang-froid : lors de soins techniques, prises de sang, vue du sang, de grosses plaies etc ; savoir gérer ses émotions : quand un patient avec qui nous avions établi une relation de confiance nous ment par exemple ; savoir rester calme ; être capable de conserver concentration et sang-froid en contexte de crise.
            </p>
          </div>
        </div>
        <div className="competences-vignette">
          <div className="competences-title" style={{ backgroundImage: `url(${Pattern})` }}>
            <h2>Compétences d’analyse</h2>
          </div>
          <div className="competences-description">
            <p>
            Savoir faire des liens entre les différents signes observés/constatés ; savoir analyser les situations ; savoir être attentif ; savoir réagir aux urgences ; savoir comprendre comment les patients vivent leur sevrage psychologiquement en observant leurs réactions et leurs façons de se comporter.
            </p>
          </div>
        </div>
        <div className="competences-vignette">
          <div className="competences-title" style={{ backgroundImage: `url(${Pattern})` }}>
            <h2>Compétences organisationnelles</h2>
          </div>
          <div className="competences-description">
            <p>
            Savoir gérer son temps ; en tant qu’étudiante en 1ère année, savoir être autonome dans les soins comme les toilettes et la prise de constantes vitales.
            </p>
          </div>
        </div>
      </div>

      <h1>
        BILAN
        <span className="h1-underline" />
      </h1>

      <p>La principale différence entre les deux stages que j’ai effectués est le public auquel j’ai eu affaire et leurs pathologies et donc la posture que nous avons face à eux. En effet, il faut s’adapter au public en face de soi en tant qu’infirmière et nous n’avons pas la même approche avec une personne de 80 ans en fin de vie qu’avec une personne de 30 ans dépendante aux drogues et à l’alcool. </p>

      <p>Avec une personne âgée, il faut plutôt être dans la douceur et l’accompagnement, on se situe plutôt dans les soins palliatifs, les soins d’hygiène et de bien-être. Nous essayons donc de soulager au mieux la personne pour qu’elle finisse sa vie dans des conditions moins douloureuses. </p>

      <p>Avec un adulte dépendant, il faut plutôt s’attarder sur le côté psychologique, il faut le réhabituer à vivre autrement (sevrage) et l’accompagner dans la construction de nouveaux repères et l’aider à suivre les règles pour s’en sortir et pouvoir rentrer chez lui sans, ou au mieux, avec moins de problèmes d’addictions. </p>
    </div>
  </>
);

export default Hopital;
