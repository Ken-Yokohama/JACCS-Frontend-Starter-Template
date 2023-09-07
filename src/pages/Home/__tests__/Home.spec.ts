import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import HomeVue from '../Home.vue'
import { VueWrapper } from '@vue/test-utils'

interface HomeFunctions {
  add: (...args: number[]) => number
}

const useFunctions = (vm: unknown): vm is HomeFunctions => {
  return vm instanceof VueWrapper
}

describe('Home Component', () => {
  it('should render the home component', async () => {
    const wrapper = mount(HomeVue)
    expect(wrapper.find('h1').text()).toEqual('Home Page')
  })

  it('should render the home component', async () => {
    const vm = mount(HomeVue).vm
    if (useFunctions(vm)) {
      const result = vm.add(1, 2, 3)
      expect(result).toBe(6)
    }
  })
})
