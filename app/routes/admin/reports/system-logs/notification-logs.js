import Route from '@ember/routing/route';

export default Route.extend({
  titleToken() {
    return this.get('l10n').t('Notification Logs');
  },

  model() {
    return this.get('store').query('notification', {
      include      : 'user',
      'page[size]' : 100,
      sort         : '-received-at'
    });
  }
});
