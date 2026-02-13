function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);
    */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === "children")   continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}
const reactElement = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank",
    },
    children: "click me to visit Google",
}

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);

/*At the end of the day, work is done in react in this way. Work given is evaluated in this way. This is the custom react*/