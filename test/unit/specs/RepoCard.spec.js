import Vue from 'vue';
import RepoCard from '@/components/RepoCard';

describe('RepoCard', () => {
  it('renders correctly with different props', () => {
    const Constructor = Vue.extend(RepoCard)
    const vm = new Constructor({ propsData: {
      repo: {
        name: 'Facebook',
        description: 'A Facebook Repository',
        html_url: 'http://github.com/facebook',
      },
    }}).$mount();

    expect(vm.$props.repo.name).toBe('Facebook');
  })
});
