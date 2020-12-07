import Modal from "react-modal";
import Image from "next/image";
import Item from "./scheduleItem";
import styles from "../sidebar/styles.module.scss";

Modal.setAppElement("#__next");

const CardModal = ({ isOpen, onClose }) => (
  <Modal
    className="absolute bg-borderLight rounded-lg inset-8 max-w-6xl mx-auto"
    overlayClassName="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50 z-30"
    isOpen={isOpen}
    shouldCloseOnOverlayClick={true}
    shouldCloseOnEsc={true}
    onRequestClose={onClose}
  >
    <div className="w-full relative h-full">
      <div className={`${styles.container} overflow-y-scroll p-7 h-full`}>
        <h2 className="text-3xl text-white">
          Практические советы на каждый день.
        </h2>
        <p className="text-sm leading-6 text-white opacity-50 pt-5">
          Есть много вариантов Lorem Ipsum, но большинство из них имеет не
          всегда приемлемые модификации, например, юмористические вставки или
          слова, которые даже отдалённо не напоминают латынь. Если вам нужен
          Lorem Ipsum для серьёзного проекта, вы наверняка не хотите
          какой-нибудь шутки, скрытой в середине абзаца. Также все другие
          известные генераторы Lorem Ipsum используют один и тот же текст,
          который они просто повторяют, пока не достигнут нужный объём. Это
          делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum
          генератором. Он использует словарь из более чем 200 латинских слов, а
          также набор моделей предложений. В результате сгенерированный Lorem
          Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или
          "невозможных" слов.{" "}
        </p>
        <p className="text-sm leading-6 text-white opacity-50 pt-5">
          Давно выяснено, что при оценке дизайна и композиции читаемый текст
          мешает сосредоточиться. Lorem Ipsum используют потому, что тот
          обеспечивает более или менее стандартное заполнение шаблона, а также
          реальное распределение букв и пробелов в абзацах, которое не
          получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст..
          Здесь ваш текст.." Многие программы электронной вёрстки и редакторы
          HTML используют Lorem Ipsum в качестве текста по умолчанию, так что
          поиск по ключевым словам "lorem ipsum" сразу показывает, как много
          веб-страниц всё ещё дожидаются своего настоящего рождения. За
          прошедшие годы текст Lorem Ipsum получил много версий. Некоторые
          версии появились по ошибке, некоторые - намеренно (например,
          юмористические варианты). Youtube video
        </p>
        <h4 className="text-xl text-white pt-10">График трансфера</h4>
        <div className="flex flex-wrap pt-8">
          <div className="w-72 pt-3.5 pr-3.5 box-content">
            <Item />
          </div>
          <div className="w-72 pt-3.5 pr-3.5 box-content">
            <Item />
          </div>
          <div className="w-72 pt-3.5 pr-3.5 box-content">
            <Item />
          </div>
        </div>
        <div
          onClick={onClose}
          className="absolute top-4 right-4 hover:cursor-pointer flex items-center"
        >
          <Image
            width="32"
            height="32"
            alt="play"
            src="/close.svg"
            layout="fixed"
            quality={100}
          />
        </div>
      </div>
    </div>
  </Modal>
);

export default CardModal;
