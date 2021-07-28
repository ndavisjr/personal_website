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
    title: "Blazor Web Server App",
    date: "July 2021",
    description: [
      "https://rvliving.azurewebsites.net/",
      "Created fully responsive RV camping web application",
      "Created in Microsoft's Blazor Framework (C#, HTML Razor pages)",
      "Consumes OpenWeatherAPI's and uses Dapper for database connectivity",
      "SQL Server hosted on AWS RDS, web hosting on Azure Web Apps",
    ],
    image: process.env.PUBLIC_URL + "/images/blazor-example.png",
    imageText: "Blazor Web Server App Example",
    link: "https://github.com/ndavisjr/rvliving",
  },
  {
    title: "React Weather Links Website",
    date: "July 2021",
    description: [
      "Created early release of React website for my personal use with storm chasing",
      "Created in VS Code using React, Redux, Router, React Slick",
      "Utilizing Firebase, Oauth via Google, StyledComponents",
      "https://davisweather-88e35.web.app/"
    ],
    image: process.env.PUBLIC_URL + "/images/react_wx_example.png",
    imageText: "React Weather Example",
    link: "https://github.com/ndavisjr/nd-weather",
  },
  {
    title: "GraphQL API",
    date: "July 2021",
    description: [
      "Created a simple GraphQL API endpoint CLI commands",
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
      "Created simple API endpoints for meat smoking instructions",
      "Endpoints developed: Create (POST), Read, Update (PUT), Delete (Json) Patch",
      "Created in VS Code using .NET 3.1 Core MVC standards",
      "Database Management: SQL Server Management Studio",
      "Utilizing .NET CLI, EntityFramework, Automapper, DataTransferObjects, Postman",
    ],
    image: process.env.PUBLIC_URL + "/images/smoking-meats-example.png",
    imageText: "REST API Example",
    link: "https://github.com/ndavisjr/smoking-meat-api",
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
