import { VocabListPage, SingleWordPage } from '../pages'

export interface IRoute {
  path: string
  element: React.ReactNode
}

export enum RouteNames {
  VOCAB = '/vocab',
  WORD = '/vocab/:id',
}

export const routes: IRoute[] = [
  { path: RouteNames.VOCAB, element: <VocabListPage /> },
  { path: RouteNames.WORD, element: <SingleWordPage /> },
]
