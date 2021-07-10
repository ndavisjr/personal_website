const exampleProjects = [
  {
    title: "This website (React JS)",
    date: "July 2021",
    description: [
      "Created personal website for displaying my resume",
      "Created in VS Code via create-react-app",
      "Fully Responsive",
      "Utilizing @material-ui/core, @material-ui/icons",
    ],
    image: process.env.PUBLIC_URL + "/images/react-example.png",
    imageText: "React Website Example",
    link: "https://github.com/ndavisjr/personal_website",
  },
  {
    title: "React Weather Links Website",
    date: "July 2021",
    description: [
      "Created early release of React website for my personal use with storm chasing",
      "Created in VS Code using React, Redux, Router, React Slick",
      "Utilizing Firebase,  Oauth via Google, StyledComponents",
    ],
    image: process.env.PUBLIC_URL + "/images/react_wx_example.png",
    imageText: "React Weather Example",
    link: "https://github.com/ndavisjr/nd-weather",
  },
  {
    title: "GraphQL API",
    date: "July 2021",
    description: [
      "Created a simple GraphQL API endpoint for the same REST example",
      "Endpoints contains example Queries, Mutations and Subscriptions",
      "Created in VS Code using .NET 5 and the Hot Chocolate Framework",
      "Database Management: SQL Server Express running in Docker",
      "Utilizing .NET CLI, EntityFramework, Insomnia API Client, GraphQL Voyager, Websockets",
    ],
    image: process.env.PUBLIC_URL + "/images/graphql-example.png",
    imageText: "GraphQL API Example",
    link: "https://github.com/ndavisjr/GraphQL-API-Example",
  },
  {
    title: "REST API",
    date: "June 2021",
    description: [
      "Created simple API endpoints for various code commands (ie CLI commands)",
      "Endpoints developed: Create (POST), Read, Update (PUT), Delete (Json) Patch",
      "Created in VS Code using .NET 3.1 Core MVC standards",
      "Database Management: SQL Server Management Studio",
      "Utilizing .NET CLI, EntityFramework, Automapper, DataTransferObjects, Postman",
    ],
    image: process.env.PUBLIC_URL + "/images/rest-example.png",
    imageText: "REST API Example",
    link: "https://github.com/ndavisjr/REST-API-Example",
  },
  {
    title: "ASP.NET Web Application",
    date: "June 2021",
    description: [
      "Created simple web app for personal inventory and monthly budgeting",
      "Created in Visual Studio 2019  using ASP.NET 5 MVC with Razor and Bootstrap",
      "Database Management: Visual Studio SQL Server",
      "Utilizing Package Manager Console, EntityFramework",
    ],
    image: process.env.PUBLIC_URL + "/images/aspnet-example.png",
    imageText: "ASP.NET Example",
    link: "https://github.com/ndavisjr/RVLife",
  },
];

export default exampleProjects;
