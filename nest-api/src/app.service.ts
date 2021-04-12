import { Injectable } from '@nestjs/common';

export type Route = {
  title: string,
  startPosition: {"lat": string, "long": string},
  endPosition: {"lat": string, "long": string}
}

@Injectable()
export class AppService {
  getRoutes(): Route[] {
    let routes: Route[]

    routes = [
      {"title": "Rota1", "endPosition": {"lat": "-23.5065751", "long": "-47.4586387"}, "startPosition": {"lat": "-23.4726389", "long": "-47.4298607"}},
      {"title": "Rota2", "endPosition": {"lat": "-23.503802078672585", "long": " -47.46229503167708"}, "startPosition": {"lat": "-23.4704608324", "long": "-47.42646197"}},
      {"title": "Rota3", "endPosition": {"lat": "-23.503408", "long": "-47.466211"}, "startPosition": {"lat": "-23.495025", "long": " -47.395261"}},
      {"title": "Rota4", "endPosition": {"lat": "-23.5206", "long": "-47.479379"}, "startPosition": {"lat": "-23.517216", "long": "-47.535417"}},
      {"title": "Rota5", "endPosition": {"lat": "-23.54236", "long": "-47.46104"}, "startPosition": {"lat": "-23.41172", "long": "-47.520017"}},
    ]

    return routes;
  }
}
