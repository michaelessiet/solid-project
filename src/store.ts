import { createSignal } from 'solid-js'
import {createStore } from 'solid-js/store'

export const [store, setStore] = createStore({count:0})
export const [storeUsingSignal, setStoreUsingSignal] = createSignal(0)