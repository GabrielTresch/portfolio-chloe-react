/* eslint-disable max-len */
import React from 'react';
import './Competences.scss';
import ArrowImg from '../../assets/img/arrow.svg';

const Competences = () => (
  <>
    <h2 className="h2-title" id="competences">
      <span>LIEN AVEC LE MÉTIER </span>
      DE PROFESSEUR DES ÉCOLES
    </h2>
    <p>Parmi toutes les compétences que j’ai relevées et essayé de mettre en place à travers mes diverses expériences, je trouve qu’il y en a beaucoup qui peuvent être réutilisées pour le métier de professeur des écoles. C’est en effet un métier très pluriel et polyvalent. Tout d’abord, il faut avoir des compétences liées directement au métier nous pouvons pour cela parler des compétences relatives aux éléments réglementaires et institutionnels comme le fait de connaître le système éducatif et son organisation, les différents acteurs qui interviennent au sein de l’école ou encore tout ce qui concerne le cadre réglementaire de l’école. Il faut également avoir des compétences relatives à la maîtrise des contenus disciplinaires ce qui est logique étant donné que les professeurs doivent transmettre des savoirs sur ces contenus disciplinaires et amener tous les enfants de la classe à les maîtriser le mieux possible. L’enseignant doit également savoir s’adapter à la diversité des élèves, c’est fondamental aujourd’hui étant donné que nous sommes dans des sociétés de plus en plus métissées et présentant un brassage de peuples, de cultures et de religions différentes. Le professeur des écoles doit également s’adapter aux différences interindividuelles de chaque élève, son niveau scolaire par exemple etc. Il faut pouvoir s’adapter aux différentes personnalités des élèves et à leurs difficultés. Un professeur doit aussi avoir des compétences relationnelles comme dans tous les métiers du social. L’enseignant doit savoir travailler en équipe et communiquer avec différents interlocuteurs puisqu’il sera en contact aussi bien avec des enfants/ses élèves, que les parents, les collègues ou encore tous les autres partenaires de la communauté éducative.  Les compétences en termes de communication et d’écoute sont donc primordiales dans ce métier. Ce qui est également très important est de savoir mettre en place une relation de confiance avec ces différents interlocuteurs et surtout avec les élèves et leurs familles pour que les apprentissages et la vie en classe se déroulent dans les meilleures conditions possibles. Enfin, il faut avoir des compétences organisationnelles puisqu’il faut savoir organiser sa classe et organiser les différents apprentissages tout en tenant compte du programme et de chacun des élèves.</p>
    <div className="table-container">
      <table>
        <thead><tr><th>Compétences de mes autres expériences</th></tr></thead>
        <tbody>
          <tr><td>Savoir mettre en place une relation de confiance avec les différents interlocuteurs que nous rencontrons</td></tr>
          <tr><td>Savoir analyser les situations</td></tr>
          <tr><td>Savoir être attentif</td></tr>
          <tr><td>Savoir s’adapter aux situations nouvelles, inédites, jamais rencontrées</td></tr>
          <tr><td>Savoir prendre sur soi</td></tr>
          <tr><td>Savoir gérer ses émotions</td></tr>
          <tr><td>Savoir gérer son temps</td></tr>
          <tr><td>Savoir définir une posture face à un public varié</td></tr>
          <tr><td>Savoir se situer par rapport à une hiérarchie</td></tr>
          <tr><td>Savoir s’adapter aux imprévus durant les séances</td></tr>
        </tbody>
      </table>
      <img src={ArrowImg} alt="arrow" />
      <table>
        <thead><tr><th>Compétences du professeur des écoles</th></tr></thead>
        <tbody>
          <tr><td>Agir en fonctionnaire de l’État et de façon éthique et responsable</td></tr>
          <tr><td>Maîtriser la langue française pour enseigner et communiquer</td></tr>
          <tr><td>Maîtriser les disciplines et avoir une bonne culture générale</td></tr>
          <tr><td>Concevoir et mettre en œuvre son enseignement</td></tr>
          <tr><td>Organiser le travail de la classe</td></tr>
          <tr><td>Prendre en compte la diversité des élèves</td></tr>
          <tr><td>Évaluer les élèves</td></tr>
          <tr><td>Maîtriser les technologies de l’information et de la communication</td></tr>
          <tr><td>Travailler en équipe et coopérer avec les parents et les partenaires de l’école</td></tr>
          <tr><td>Se former et innover</td></tr>
        </tbody>
      </table>
    </div>
  </>
);

export default Competences;
