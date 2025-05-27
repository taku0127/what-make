import React, { useState } from 'react'
import type { User } from './user.type';
import { atom, useAtom } from 'jotai';

const currentUserAtom = atom<User>();
const useCurrentUserStore = () => {
    const [user, setUser] = useAtom(currentUserAtom);
    return {
        user,
        setUser
    };
}
export default useCurrentUserStore
