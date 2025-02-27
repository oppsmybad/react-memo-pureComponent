import { useState, memo, PureComponent, Component, useCallback } from "react"; // Импортируем компоненты memo и PureComponent
import { Container } from "react-bootstrap";
import "./App.css";

import "./bootstrap.min.css";

// class Form extends Component {
//     // Компонент жизненного цикла shouldComponentUpdate
//     shouldComponentUpdate(nextProps) {
//         // Условие
//         if (this.props.mail.name === nextProps.mail.name) {
//             return false;
//         }
//         return true;
//     }

//     render() {
//         console.log("render");

//         return (
//             <Container>
//                 <form className="w-50 border mt-5 p-3 m-auto">
//                     <div className="mb-3">
//                         <label
//                             htmlFor="exampleFormControlInput1"
//                             className="form-label mt-3"
//                         >
//                             Email address
//                         </label>
//                         <input
//                             value={this.props.mail.name}
//                             type="email"
//                             className="form-control"
//                             id="exampleFormControlInput1"
//                             placeholder="name@example.com"
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label
//                             htmlFor="exampleFormControlTextarea1"
//                             className="form-label"
//                         >
//                             Example textarea
//                         </label>
//                         <textarea
//                             value={this.props.text}
//                             className="form-control"
//                             id="exampleFormControlTextarea1"
//                             rows="3"
//                         ></textarea>
//                     </div>
//                 </form>
//             </Container>
//         );
//     }
// }

// Класс Form наследуется от PureComponent вместо обычного Component
// PureComponent автоматически реализует shouldComponentUpdate
// с поверхностным сравнением пропсов и состояния
// class Form extends PureComponent {
//     render() {
//         // Этот console.log поможет отслеживать частоту перерисовок
//         // При использовании PureComponent он будет вызываться только при изменении пропсов/состояния
//         console.log("render");

//         return (
//             <Container>
//                 {/* Основная форма с контролируемыми компонентами */}
//                 <form className="w-50 border mt-5 p-3 m-auto">
//                     <div className="mb-3">
//                         <label
//                             htmlFor="exampleFormControlInput1"
//                             className="form-label mt-3"
//                         >
//                             Email address
//                         </label>
//                         {/* Значение берется из пропсов - при их изменении будет перерисовка */}
//                         {/* PureComponent сравнит новые пропсы с предыдущими */}
//                         <input
//                             value={this.props.mail}
//                             type="email"
//                             className="form-control"
//                             id="exampleFormControlInput1"
//                             placeholder="name@example.com"
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label
//                             htmlFor="exampleFormControlTextarea1"
//                             className="form-label"
//                         >
//                             Example textarea
//                         </label>
//                         {/* Аналогично для текстового поля - значение из пропсов */}
//                         <textarea
//                             value={this.props.text}
//                             className="form-control"
//                             id="exampleFormControlTextarea1"
//                             rows="3"
//                         ></textarea>
//                     </div>
//                 </form>
//             </Container>
//         );
//     }
// }

// function propsCompare(prevProps, nextProps) {
//     // Условие
//     return (
//         prevProps.mail.name === nextProps.mail.name &&
//         prevProps.text === nextProps.text
//     );
// }

// Оборачиваем функцию в компонент memo (меморизируем ее, чтобы запоминать поверхностно старые данные)
const Form = memo((props) => {
    console.log("render");

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label mt-3"
                    >
                        Email address
                    </label>
                    <input
                        value={props.mail.name}
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                    >
                        Example textarea
                    </label>
                    <textarea
                        value={props.text}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                    ></textarea>
                </div>
            </form>
        </Container>
    );
});

function App() {
    const [data, setData] = useState({
        mail: "name@example.com",
        text: "some text",
    });

    // Оборачиваем функцию в useCallback чтобы компонент не обновлялся без конкретных зависимостей
    const onLog = useCallback(() => {
        console.log("wow");
    }, []);

    // все данные остаются неизменными (тк одинаковые и компонент не перерисовывается засчет компонента memo)
    return (
        <>
            <Form mail={data.mail} text={data.text} onLog={onLog} />
            <button
                style={{ margin: "20px auto", display: "block" }}
                className="w-20 p-3"
                onClick={() =>
                    setData({
                        mail: "name@example.com",
                        text: "some text",
                    })
                }
            >
                Click me
            </button>
        </>
    );
}

export default App;
