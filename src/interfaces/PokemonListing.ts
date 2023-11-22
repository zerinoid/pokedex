export default interface IPokemonListing {
  count: number;
  results: Array<{
    name: string;
    url: string;
  }>;
}
