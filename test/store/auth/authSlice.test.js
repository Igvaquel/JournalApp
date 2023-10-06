/* eslint-disable no-undef */
import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice"
import { authenticatedState, demoUser, initalState } from "../../fixtures/authFixtures";


describe('pruebas en el authSlice', () => { 
    
    test('debe de regresar el estado inicial y llamarse "auth" ', () => { 
      
        expect( authSlice.name ).toBe( 'auth' );
        const state = authSlice.reducer( initalState, {} );
        expect( state ).toEqual( initalState );
    })

    test('debe de realizar la autenticacion', () => { 
      
        const state = authSlice.reducer( initalState, login( demoUser ) );
        expect( state ).toEqual({
            status: 'authenticated', //"checking", "not-authenticated", "authenticated"
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null,
        });
    })

    test('debe de realizar el logout sin argumentos', () => { 
      
        const state = authSlice.reducer( authenticatedState, logout() );
        expect( state ).toEqual({
            status: 'not-authenticated', //"checking", "not-authenticated", "authenticated"
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined,
        });
    })

    test('debe de realizar el logout con argumentos', () => { 
        
        const errorMessage = 'Credenciales no son correctas';
        const state = authSlice.reducer( authenticatedState, logout({ errorMessage }) );
        expect( state ).toEqual({
            status: 'not-authenticated', //"checking", "not-authenticated", "authenticated"
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessage,
        });
    })

    test('debe de cambiar el estado a checking', () => { 
        
        const state = authSlice.reducer( authenticatedState, checkingCredentials() );
        expect( state.status ).toBe( 'checking' );
    })
})