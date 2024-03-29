import "./About.css"

export default function AboutCss() {
    return (
        <p className="css-text">  <span className="css-title">&nbsp;&nbsp;Каскадные таблицы стилей</span> (CSS – Cascading Style Sheets), представляют собой технологию определения и присоединения стилей к Web-документам.<br />
            <br />
            &nbsp;&nbsp;   <span className="css-title">CSS</span> обеспечивают всего лишь отделение структуры документа от его визуального
            представления.    <br />
            <span className="css-title">&nbsp;&nbsp;Стиль</span> – набор свойств, определяющих форматирование элемента (или группы элементов), влияющих на его     <span className="css-title">отображение. </span>   <br />
            <span className="css-title">&nbsp;&nbsp;Стиль</span> – это все то, что определяет внешний вид документа HTML при его отображении в
            окне браузера: шрифты и цвета заголовков разных уровней, шрифт и разрядка основного текста, задаваемого в тэге абзаца р, и т. д.    <br />
            &nbsp;&nbsp;Стиль задается по определенным     <span className="css-title">правилам.  </span>  <br />
            <span className="css-title">&nbsp;&nbsp;Таблица стилей</span> – набор правил (свойств), которые описывают, как тот или иной
            элемент или группа элементов документа будут отображаться.    <br />
            <br />
            <span className="css-title">Преимущества CSS:</span><br />
            <span className="css-title">1.</span> Отделяется структура документа от его визуального представления, что делает код более гибким и логичным, а изменять его становится проще;<br />
            <span className="css-title">2.</span> В большинстве случаев уменьшается объем кода;<br />
            <span className="css-title">3.</span> Уменьшается время загрузки документа (CSS-файл можно присоединять к документу, браузер кэширует<br />
            его и при следующих загрузках страницы будет брать CSS-файл из кэша);<br />
            <span className="css-title">4.</span> Увеличивается логичность кода – меньше времени на разработку сайта;<br />
            <span className="css-title">5.</span> Значительно увеличивается контроль над визуальным представлением документа;<br />
            <span className="css-title">6.</span> Появляется возможность контролировать вывод страниц на принтер;<br />
            <br />
            <span className="css-title">Особенности CSS:</span><br />
            <span className="css-title">1.</span> Гибкость подключения.<br />
            <span className="css-title">2.</span> Зависимость от среды представления<br />
            <span className="css-title">3.</span> Наследование.<br />
            <span className="css-title">&nbsp;&nbsp;Наследование</span> – это перенос стиля форматирования элементов-предков на вложенные
            в них элементы-потомки. При изменении описания стиля элемента-предка соответственно изменяются все элементы, наследующие этот стиль.<br />
            <span className="css-title">4.</span> Каскадность.<br />
            <br />
            <span className="css-title">С помощью CSS можно устанавливать:</span> <br />
            <span className="css-title">1.</span> внешний вид (форматирование) контента (текстового содержимого) элемента;    <br />
            <span className="css-title">–&nbsp;</span> межстрочные интервалы,    <br />
            <span className="css-title">–&nbsp;</span> цвет текста, фона и т.д.,    <br />
            <span className="css-title">–&nbsp;</span> размер и гарнитуру шрифта и др.    <br />
            <span className="css-title">2.</span> окружение контента элемента (модель блока элемента, element boxes);    <br />
            <span className="css-title">3.</span> размещение блока элемента на странице (position, float)    <br />

        </p>
    )
}