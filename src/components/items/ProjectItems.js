const projectItems = () => {
  return {
    main: [
      {
        pic: 'https://user-images.githubusercontent.com/122406231/263294408-52ac1c0c-4bc9-4b80-8117-b8e7675ee69c.png',
        title: 'Transition Taskr',
        link: 'https://github.com/gschool-blue-ocean/mcsp-22-transition-hub',
        summ: "Transition Taskr was a project that myself and a team of 4 other Software Engineers created in order to allow our client to be able to keep track of two categories of users. I personally worked the most on handling the authorization and authentication of users and making sure the roles had the proper permissions. One problem I had to overcome was that we had to find a way to control how the different roles registered. The way I fixed this is by having the user pass in a passcode that is set up by the client. By inputing a role's passcode, the registration page would be for that role.",
      },
      {
        pic: 'https://cdn.vox-cdn.com/thumbor/BlcgWN6V6skKkPPXtOp8P5JO_Sk=/65x0:721x437/1200x800/filters:focal(65x0:721x437)/cdn.vox-cdn.com/imported_assets/1821689/c6aa0906b6.png',
        title: 'Steam Clone',
        link: 'https://github.com/VIBING-GOON-SQUAD/FEC',
        summ: 'summary',
      },
    ],
    mini: [
      {
        pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/400px-Tic_tac_toe.svg.png',
        title: 'tic tac toe',
        link: 'https://gametable.org/games/tic-tac-toe/',
        focus:
          'In this project I was learning how to use angular. I focused on using useState analog.',
      },
    ],
  };
};

export default projectItems();
/*
{pic:, title:, link:, summ:}
{pic:, title:, link:, focus:}
*/
