import "./About.css"

export default function AboutCssSelectors() {
    return (
        <p className="css-text">
            <br />
            <span className="css-title">Селекторы</span><br />
            <span className="css-title">Типы селекторов:</span><br />
            <span className="css-title">1.</span>Селектор по элементу (селектор типа);  <br />
            <span className="css-title">2.</span>Универсальный селектор;  <br />
            <span className="css-title">3.</span>Контекстный селектор;  <br />
            <span className="css-title">4.</span>Селектор по классу;  <br />
            <span className="css-title">5.</span>Селектор по уникальному идентификатору (ID);  <br />
            <span className="css-title">6.</span>Селектор по атрибуту;  <br />
            <span className="css-title">7.</span>Дополнительные селекторы;  <br />
            <span className="css-title">8.</span>Псевдоэлементы и псевдоклассы.    <br />
            <br />
            <span className="css-title">Селектор по элементу (селектор типа)</span> <br />
            &nbsp;&nbsp;Используется для присвоения стиля всем элементам заданного типа.<br />
            &nbsp;&nbsp;<span className="css-title">Пример:</span><br />
            &nbsp;&nbsp;р "{'{'}"color: #CCC; font-size: 14px; background-color: #C9DEEA;"{'}'}" <br />
            <br />
            <span className="css-title">Универсальный селектор (universal selector)</span> <br />
            &nbsp;&nbsp;Используется для присвоения стиля всем элементам. В сочетании с другими селекторами универсальный
            селектор можно применить для стилизации всех дочерних элементов заданного элемента.<br />
            &nbsp;&nbsp;<span className="css-title">Пример:</span><br />
            &nbsp;&nbsp;* {'{'}text - align: center;{'}'}<br />
            &nbsp;&nbsp;ul {'>'} * {'{'} box - sizing: border-box;{'}'}<br />
            <br />
            <span className="css-title">Контекстный селектор</span> <br />
            &nbsp;&nbsp;Контекстный селектор (contextual selectors, селектор потомков, descendant selectors,
            нисходящий селектор) позволяет выбрать элементы, вложенные в заданные элементы или
            группы элементов.<br />
            комбинатор (combinator) – пробел<br />
            &nbsp;&nbsp;<span className="css-title">Пример:</span><br />
            &nbsp;&nbsp;p_em {'{'}margin: 25px auto;{'}'}<br />
            &nbsp;&nbsp;ul li {'{'}color: orange;{'}'}
            <br />
            <br />
            <span className="css-title">Селектор по классу (class selectors)</span> <br />
            &nbsp;&nbsp;Выбирает элементы, относящиеся к определенному классу.
            <br />
            &nbsp;&nbsp;комбинатор – . (точка)<br />
            &nbsp;&nbsp;<span className="css-title">Пример:</span><br />
            &nbsp;&nbsp;.smaller {'{'}color: #CCC; font-size: 14px{'}'}<br />
            <br />
            <br />
            <span className="css-title">Селектор по уникальному идентификатору (ID selectors)</span> <br />
            &nbsp;&nbsp;Находит (выбирает) элемент с уникальным идентификатором.
            В HTML-документе (странице) может быть только один элемент с данным id. Атрибут id
            можно применять к любому элементу документа
            <br />
            комбинатор – #
            <br />
            &nbsp;&nbsp;<span className="css-title">Пример:</span><br />
            &nbsp;&nbsp;#first {'{'}color: #00F;{'}'}
            <br />
            <br />
            <span className="css-title">Селектор по атрибуту (attribute selectors) (class selectors)</span> <br />
            &nbsp;&nbsp;С помощью селектора атрибутов элементу можно присваивать стиль на основе
            наличия атрибута или значения, присвоенного атрибуту.
            < br />
            комбинатор – [ ] (квадратные скобки)< br />
            &nbsp;&nbsp;<span className="css-title">Пример:</span><br />
            &nbsp;&nbsp;h2[class] {'{'}color: silver;{'}'}<br />
            <br />
            <br />
            <span className="css-title">Дополнительные селекторы</span> <br />
            &nbsp;&nbsp;Для выбора элементов (применения правил) они используют DOM-структуру
            HTML-документов, т.е. родительско-дочерние отношения (parent-child
            relationship) элементов.
            <  br />
            < br />
            <span className="css-title">1.</span> Селектор потомков <br />
            &nbsp;&nbsp;<span className="css-title">Пример:</span><br />
            &nbsp;&nbsp;p em {'{'}…{'}'}<br />
            < br />
            <span className="css-title">2.</span> Селектор дочерних элементов <br />
            &nbsp;&nbsp;Отбирает дочерние элементы (элемент), которые располагаются непосредственно
            внутри родительского элемента.
            < br />
            комбинатор – {'>'} (greater then)< br />
            &nbsp;&nbsp;<span className="css-title">Пример:</span><br />
            &nbsp;&nbsp;p{'>'}em {'{'}color: red;{'}'}<br />
            < br />
            <span className="css-title">3.</span> Селектор сестринских элементов
            <br />
            &nbsp;&nbsp;Соседними называются элементы веб-страницы, когда они следуют непосредственно друг за другом в коде документа.
            ывает на смежный (или следующий) элемент. Обеспечивает выбор элемента
            расположенного только непосредственно за определенным в первой части элементом
            < br />
            комбинатор – +(плюс)  < br />
            &nbsp;&nbsp;<span className="css-title">Пример:</span><br />
            &nbsp;&nbsp;h1+р{'{'}…{'}'}<br />
            < br />
            <span className="css-title">4.</span> Селектор родственных (следующих) элементов
            <br />
            &nbsp;&nbsp;Выбирает ВСЕ элементы данного типа, располагающеся где-нибудь после указанного. При этом они должны иметь общего родителя.
            < br />
            комбинатор – ~(тильда) < br />
            &nbsp;&nbsp;<span className="css-title">Пример:</span><br />
            &nbsp;&nbsp; h1 ~ p {'{'}…{'}'}<br />
            < br />
            <span className="css-title">Селекторы псевдоклассов и псевдоэлементов (pseudo-selectors)
            </span>
            <br />
            &nbsp;&nbsp;<span className="css-title">Селекторы псевдоклассов</span> (pseudo-class selectors) и селекторы псевдоэлементов
            (pseudo-element selectors) позволяют назначать стили структурам, существование которых в документе необязательно, или фантомным классам, наличие которых зависит от
            состояния элемента или даже от состояния документа в целом
            < br />
        </p >
    )
}