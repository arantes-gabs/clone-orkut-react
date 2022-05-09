import React from 'react';
import './mbti-card.scss';

const dictionary = {
  e: 'Extrovertidos (E): pessoa é motivada através da interação com outras pessoas, geralmente agem antes de pensar.',
  i: 'Introvertidos (I): pessoa se sente motivado/energizado pelo engajamento em atividades solitárias, preferem refletir muito antes de qualquer ação.',
  s: 'Sensoriais (S): esse tipo de pessoa têm a consciência voltada para o que existe de concreto, ou seja, aquilo que pode ser percebido através dos 5 sentidos.',
  n: 'Intuitivo (N): já estes indivíduos possuem a consciência voltada ao abstrato, ao lado simbólico, ao intangível.',
  t: 'Racionalistas (T): são pessoas concisas, que atuam de maneira lógica, organizada e objetiva; sempre buscam argumentos racionais.',
  f: 'Sentimentais (F): faz parte desse grupo as pessoas que se baseiam em critérios subjetivos, como valores e preferências, levando em consideração necessidades humanas e decidindo “com o coração”, por exemplo.',
  j: 'Julgadores (J): esses indivíduos são decisivos, preferem seguir regras claras e viver de maneira mais planejada, estruturada. Além disso, sentem tranquilidade quando decisões são tomadas.',
  p: 'Perceptivos (P): são as pessoas que gostam de liberdade e improvisações. Dessa forma, elas dão preferência a uma vida com maior flexibilidade, adaptável. Sentem tranquilidade quando apresentam opções em aberto.',
};

const MbtiCard = ({ title, letter, percentage }) => {
  return (
    <div className="mbti-card">
      <div className="mbti-card__title">{title}</div>

      <div className="mbti-card__letter">{letter}</div>

      <div className="mbti-card__percentage">{percentage}%</div>

      <p className="mbti-card__description">{dictionary[letter]}</p>
    </div>
  );
};

export default MbtiCard;
