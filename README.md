# Plotly-Challenge
In this challenge we were tasked with creating an interactive dash board to represent the bellybutton bacteria found inside the navels of the study participants.


![Alt text](images/DemInfo_BarChart.png?raw=true "Title")
![Alt text](images/BubbleChart.png?raw=true "Title")
![Alt text](images/DropDown.png?raw=true "Title")


[![LinkedIn][linkedin-shield]][linkedin-url]

Using HTML and Bootstrap I built and deployed a web page to visualize an analysis performed on weather data comparing the effect of latitude on several other primary weather indicators. Take a look the deployed site [Here](https://johnshuford.github.io/Web-Design-Challenge/)!

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![plot](./Resources/Assets/HomePageScreenShot.png)
![plot](./Resources/Assets/ComparisonScreenShot.png)

In this project we created an interactive and responsive web page to serve as a dashboard to display analysed weather data in a user friendly way. This project was built using HTML5 and Bootstrap to build the frame work then to make it responsive to any screen size. The homepage shares a beif introduction the dashboard and clicking into the visualizations themselves will give a more detailed discription the specific graph.

### Built With

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
* [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

It is important to make sure that you have these files refrenced in the head of your HTML file or nothing will show when you try and run the Bootstrap elements.

CSS
  ```sh
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384 MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  ```
JS
  ```sh
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  ```


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/JohnShuford/Web-Design-Challenge
   ```
2. Get to editing the HTML files in your favorite text editor! I recomend [Visual Studio Code](https://code.visualstudio.com/)


<!-- USAGE EXAMPLES -->
## Usage

Here is a code example of a bootstrap navigation bar! They are faily simple to use and customize to any need you may have. Just make sure that you are calling all of the requisite files in the header of your HTML page.

```sh
<nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="index.html">
        <div class="box skyblue">
          <img src="Resources/Assets/globe2.svg" width="25" height="25" class="d-inline-block align-top" alt="" loading="lazy">
          Latitude
        </div>
      </a>
      </button>
      <div class="collapse navbar-collapse mr-auto" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active mr-auto">
            <a class="nav-link" href="docs/comparisons.html">Comparisons<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="docs/data.html">Data<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown active">
            <a class="nav-link dropdown-toggle" href="comparisons.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Plots
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="docs/vsCloudiness.html">vsCloudiness</a>
              <a class="dropdown-item" href="docs/vsHumidity.html">vsHumidity</a>
              <a class="dropdown-item" href="docs/vsTemprature.html">vsTemprature</a>
              <a class="dropdown-item" href="docs/vsWindSpeed.html">vsWindSpeed</a>
            </div>
          </li>
        </ul>
      </div>
```

For more Bootstrap documentation follow this link! https://getbootstrap.com/docs/4.1/getting-started/introduction/


<!-- CONTACT -->
## Contact

John Shuford - [LinkedIn](https://www.linkedin.com/in/john-shuford-data-analyst/) - johnshuford@me.com

Project Link: [https://github.com/JohnShuford/Web-Design-Challenge](https://github.com/JohnShuford/Web-Design-Challenge)

Deployed: [https://johnshuford.github.io/Web-Design-Challenge/](https://johnshuford.github.io/Web-Design-Challenge/)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* This project was completed for and under the supervision of the Trilogy team opperating the Data Analytics Bootcamp through the University of Denver.
* Shoutouts to Svitlana Malenfant (Instructor)


<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/john-shuford-data-analyst/
