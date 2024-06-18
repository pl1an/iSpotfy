// salve! esse arquivo contém uma função que reseta o local storage para o default
// estou chamando ela na welcame page atualmente para testes com o local storage e a lata de lixo
// se houver algum erro com o local storage vazio ou com falta de dados entrem na welcome page para ativar essa função
// ela vai resetar o local storarage (com as musicas placeholders que vcs colocaram durante desenvolvimento)

export function default_storage(){
  return([
      {
        name: "The Zephyr Song",
        singer: "Red Hot Chilli Pepers",
        album: "By The Way",
        fav: false,
        trashed: false,
        playlist: 'dailymix1'
      },
      {
        name: "Talk",
        singer: "Coldplay",
        album: "X&Y",
        fav: false,
        trashed: false,
        playlist: 'dailymix1'
      },
      {
        name: "música 01",
        singer: "artista 01",
        album: "álbum 01",
        fav: false,
        trashed: false,
        playlist: 'dailymix1'
      },
      {
        name: "música 02",
        singer: "artista 02",
        album: "álbum 02",
        fav: false,
        trashed: false,
        playlist: 'dailymix1'
      },
      {
        name: "música 03",
        singer: "artista 03",
        album: "álbum 03",
        fav: false,
        trashed: false,
        playlist: 'dailymix1'
      }
    ])
}

export function set_storage(new_storage, target_playlist){
    localStorage.setItem(target_playlist, JSON.stringify(new_storage));
}