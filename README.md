# Music Albums

Backend application to search for albums, developed with nestjs and the AGORA methodology.


## Project structure

The project is structured in a modular way, where each new functionality must be a new module containing its particularities and things common to the entire project must be in the `common` module.


## References about cluster api

https://nodejs.org/api/cluster.html

https://www.w3schools.com/nodejs/ref_cluster.asp

https://iamwilliamkoller.medium.com/usando-clusters-no-nestjs-vantagens-e-desvantagens-9ba41a63475e


### Directory tree

```
src/
    ├── common/
    │   └── services/
    └── features/
        └── albums/
            ├── controllers/
            ├── dtos/
            ├── models/
            ├── repositories/
            └── services/
```


## ScreenShots

| ![App Screenshot](assets/screenshots/arquitetura.png) |


## Json examples

```
{
  "title": "Master of Puppets",
  "artist": "Metallica",
  "year": 1986
}
{
  "title": "Cowboys from Hell",
  "artist": "Pantera",
  "year": 1990
}
{
  "title": "Roots",
  "artist": "Sepultura",
  "year": 1996
}
```


## License

MIT License

Copyright (c) 2025 William Franco

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
