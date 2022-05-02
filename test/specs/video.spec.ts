before(async () => {
  await browser.url(
    'https://www.volvocars.com/intl/v/car-safety/a-million-more'
  );
  await $('//*[@id="onetrust-accept-btn-handler"]').click();
});

describe('main video test', () => {
  let classes;
  it('open and play the main video, if "WATCH THE STORY" button is clicked', async () => {
    await browser.refresh();
    // video is playing
    const watchTheStory = await $(
      '//*[@id="Video-1"]/section/div/div/div/button'
    ).click();

    // Switch to iframe to interact with video player
    const videoIframe = await $('//*[@id="Video-1"]/section/div/iframe');
    await browser.switchToFrame(videoIframe);
    const player = await $('#movie_player');
    classes = await player.getAttribute('class');
    expect(/playing-mode/gi.test(classes)).toHaveAttribute(
      'class',
      'playing-mode12345'
    );
  });
  it('stop the main video if stop button is clicked', async () => {
    // video is paused
    await $('//*[@id="movie_player"]/div[29]/div[2]/div[1]/button').click();
    const player = await $('#movie_player');

    classes = await player.getAttribute('class');
    expect(/paused-mode/gi.test(classes)).toBe(true);
  });
});
