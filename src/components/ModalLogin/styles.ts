import { styled } from "@/stitches.config"

export const Container = styled('div', {
    position: 'fixed',
    inset: 0,
    zIndex: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.6rem',
    background: 'rgba(0, 0, 0, 0.6)',
})
export const ContentModaL = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5.6rem 2.4rem 3.2rem',
    gap: '3.2rem',
    position: 'relative',
    width: '100%',
    maxWidth: '51.6rem',
    background: '$gray700',
    boxShadow: '.4rem 1.6rem 2.4rem rgba(0, 0, 0, 0.25)',
    borderRadius: '1.2rem',
    margin: '0 auto',

    '@md': {
        padding: '5.6rem 7.2rem',
        gap: '4rem',
    },

    '& > h2': {
        width: '100%',
        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '$bold',
        fontSize: '$md',
        lineHeight: '$short',
        textAlign: 'center',
        color: '$gray200',

    }
})

export const IconStyled = styled('button', {
    position: 'absolute',
    top: '.8rem',
    right: '.8rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '4.4rem',
    height: '4.4rem',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    color: '$gray400',
  })

export const OptionsLogin = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.6rem',
    width: '100%',
})
