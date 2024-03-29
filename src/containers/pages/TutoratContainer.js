/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import GoBack from '../../components/history/GoBack';
import './page.scss';
import TutoratImg from '../../assets/img/tutorat.jpg';
import Pattern from '../../assets/img/greek-vase.png';

const Tutorat = () => (
  <>
    <div className="page-container">
      <div className="page-image" style={{ backgroundImage: `url(${TutoratImg})` }} />
      <GoBack />
      <h1>
        Tutorat
        <span className="h1-underline" />
      </h1>
      <p>Au premier semestre de mon année de L3 Sciences de l'Éducation j’ai été recrutée pour faire des cours de tutorat aux élèves de première année en Sciences de l'Éducation pour une séance de 2h une fois par semaine pendant tout le premier semestre. Mon rôle était d’accompagner et de guider les élèves au niveau de la méthodologie, les aider à s’insérer dans le monde de la Fac qui est nouveau pour eux, leur permettre de se retrouver dans les locaux, de comprendre le langage de la Fac et donc de comprendre le fonctionnement général de l’université. J’avais un rôle de soutien, d’accompagnement et je devais les préparer à prendre leurs cours, passer des examens, les conduire doucement à l’autonomie et ainsi, les rendre plus confiants. Il fallait que je les aide à comprendre les rouages de la Fac, mais surtout leur apprendre à apprendre. </p>

      <p>J’ai eu un groupe de 15 personnes et je devais m’organiser moi-même pour trouver un créneau de 2 heures dans la semaine pour placer mes heures de tutorat. La première difficulté que j’ai rencontrée a été de trouver un créneau qui collait entre mon emploi du temps et celui de mes futurs tuteurés. J’ai dû regarder leur emploi du temps et le mien, voir ce qui pouvait être proposé et j’ai finalement trouvé un créneau le lundi de 12h à 14h. Le problème était que certains avaient quand même cours (des options) et ils étaient seulement disponibles 1h sur les 2h j’ai donc décidé de faire 2 groupes et donc de couper ma séance en deux pour arranger tous les étudiants. J’avais donc un premier groupe de tuteurés de 12h à 13h et un deuxième groupe de 13h à 14h. Ce qui me faisait peur c’est que nous les tuteurs, nous étions un peu livrés à nous-mêmes nous avons seulement eu une petite formation de 1h avant de commencer nos cours et cette formation nous donnait des pistes générales surtout car nous avions quand même une grande autonomie au niveau de l’organisation des séances de tutorat. Pour la première séance, j’ai décidé de faire une séance présentation tout d’abord, car je pense que pour travailler avec un groupe il faut le connaître un minimum. Et dans cette première séance j’ai également fait visiter le campus à mes tuteurés pour qu’ils puissent se repérer dans la Fac et connaître un peu mieux les différents bâtiments et à quoi ils servent. Le premier cours s’est très bien passé et malgré mon stress avant de commencer la séance, j’ai été très dynamique, accueillante et assurée avec mes tuteurés. Pour les séances qui ont suivies, j’ai chaque fois préparé des présentations pour les élèves, je leur ai donné beaucoup de conseils au niveau de la prise des cours, des notes, la façon de s’organiser, de réviser ses cours, de préparer ses examens et de réussir à la Fac. J’ai aussi proposé qu’à chaque séance une personne viendrait devant présenter un PowerPoint sur un thème ou sujet de son choix qui pouvait être une passion, un sport ou quelque chose qui leur tient à cœur. De cette manière, les élèves s’entrainaient à préparer et faire un PowerPoint, faire un petit oral devant un groupe, ce qui sera leur quotidien dans cette filière, c’était donc un bon entraînement pour eux. Les élèves ont tous joué le jeu et à chaque séance nous avions des présentations. Cela permettait aussi d’en apprendre davantage les uns sur les autres et donc d’installer un climat de confiance et une bonne dynamique de groupe. J’ai également aidé les tuteurés à préparer leurs fiches de révisions dans certaines matières, je les mettais sur la piste et je ramenais mes anciennes fiches de révisions pour leur apporter un complément à leur travail. A chaque séance je répondais également aux questions que ce soit au niveau administratif, des démarches, des Unités d’Enseignement, de l’organisation des cours, de la façon de faire de certains profs que j’ai moi-même eu ou ai encore etc. Sur leur demande, j’ai aussi préparé des exercices de français, de conjugaison et d’orthographe. Je m’adaptais en fait à leurs besoins et leurs questions pour préparer les séances qui suivaient. La seule difficulté que j’ai ressentie c’était au niveau du temps. En effet, lors d’un des premiers cours que j’ai donné, ma présentation avait duré moins de temps que prévu et les élèves n’avaient pas forcément de questions et donc je les ai laissé partir plus tôt. Après cela, je préparais chaque fois plusieurs choses à l’avance comme ça si nous finissions une présentation et qu’il y avait encore du temps je pouvais enchaîner sur une deuxième présentation. Parfois aussi, je préparais des choses et finalement il y avait beaucoup de questions et je n’avais pas forcément le temps de faire tout ce qui était prévu. Mais en même temps cela m’entraînais pour mon futur métier étant donné que je veux devenir professeur des écoles. Je devrais aussi préparer mes cours à l’avance et m’adapter au moment présent car dans un cours il peut toujours se passer des imprévus et donc il faut savoir improviser ou répondre aux besoins des apprenants sur le moment.</p>

      <h1>
        <span className="h1-light">COMPÉTENCES </span>
        DIRECTES
        <span className="h1-underline" />
      </h1>

      <div className="page-grid-container">
        <div className="competences-vignette">
          <div className="competences-title" style={{ backgroundImage: `url(${Pattern})` }}>
            <h2>Compétences relationnelles</h2>
          </div>
          <div className="competences-description">
            <p>
            Savoir accueillir un public d’étudiants, savoir communiquer avec les étudiants ; adopter une attitude favorable à l’écoute et aux échanges ; encourager et rassurer les étudiants ; savoir animer un groupe d’étudiants et entretenir une dynamique de groupe ; prendre en compte les conseils donnés par le professeur référent de l’organisation des cours de tutorat et les conseils donnés lors de la formation.
            </p>
          </div>
        </div>
        <div className="competences-vignette">
          <div className="competences-title" style={{ backgroundImage: `url(${Pattern})` }}>
            <h2>Compétences comportementales</h2>
          </div>
          <div className="competences-description">
            <p>
            Adaptation : savoir s’adapter à la diversité des étudiants (niveau scolaire, origines sociales etc) ; adapter son comportement et son langage aux différents étudiants en fonction de leur personnalité, leurs difficultés, leur concentration etc.
            </p>
          </div>
        </div>
        <div className="competences-vignette">
          <div className="competences-title" style={{ backgroundImage: `url(${Pattern})` }}>
            <h2>Compétences de transmission</h2>
          </div>
          <div className="competences-description">
            <p>
            Savoir donner des conseils et des astuces aux étudiants pour qu’ils puissent réussir à la Fac ; savoir transmettre des informations ; savoir transmettre des savoirs sur son expérience et son vécu ; savoir répondre aux questions des étudiants ; savoir où chercher les informations pertinentes.
            </p>
          </div>
        </div>
        <div className="competences-vignette">
          <div className="competences-title" style={{ backgroundImage: `url(${Pattern})` }}>
            <h2>Compétences organisationnelles</h2>
          </div>
          <div className="competences-description">
            <p>
            Savoir préparer un cours pour des étudiants de L1, savoir préparer et organiser des séances de tutorat.
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
            Savoir mettre en place une relation de confiance avec les étudiants tuteurés.
            </p>
          </div>
        </div>
        <div className="competences-vignette">
          <div className="competences-title" style={{ backgroundImage: `url(${Pattern})` }}>
            <h2>Compétences comportementales</h2>
          </div>
          <div className="competences-description">
            <p>
            Adaptation : savoir s’adapter aux imprévus durant les séances ; savoir trouver sa place et se positionner par rapport aux étudiants car je suis une étudiante également, je ne suis pas encore une professeure, j’avais plutôt un rôle d’accompagnement.
            </p>
          </div>
        </div>
        <div className="competences-vignette">
          <div className="competences-title" style={{ backgroundImage: `url(${Pattern})` }}>
            <h2>Compétences organisationnelles </h2>
          </div>
          <div className="competences-description">
            <p>
            Savoir gérer mon temps durant les séances de tutorat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Tutorat;
