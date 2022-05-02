before(async () => {
  await browser.url(
    'https://www.volvocars.com/intl/v/car-safety/a-million-more'
  );
  await $('//*[@id="onetrust-accept-btn-handler"]').click();
});

describe('check the main page', () => {
  it('should have the right title', async () => {
    expect(browser).toHaveTitle('A million more | Volvo Cars - International');
  });
  it('if click on "Our Cars" link, a menu popup page is opened', async () => {
    await $('//*[@id="nav:topNavCarMenu"]/em').click();
    const text = await $(
      '//*[@id="site-nav-cars-menu-section-tab-0"]/h2'
    ).getText();
    await $('//*[@id="vcc-site-nav"]/div/div/div[1]/div/div[2]/button').click();
    expect(text).toBe('Electric');
  });
  it('if click on "Menu" link, can see the menu', async () => {
    await $('//*[@id="sitenav-sidenav-toggle"]/em').click();
    const text = await $(
      '//*[@id="nav:sideNavigation"]/div[2]/div[2]/div/div/div[1]/div[2]/div[3]/button/em'
    ).getText();
    await $(
      '//*[@id="nav:sideNavigation"]/div[2]/div[1]/div[2]/button'
    ).click();
    expect(text).toBe('About Volvo');
  });
});
