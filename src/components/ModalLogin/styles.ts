import { styled } from "@/stitches.config"

export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '100rem',
    position: 'absolute',
    zIndex: '100',
    height: '90rem',
    boxShadow: '$gray800',
    
})
export const ContentModaL = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5.6rem 7.2rem',
    gap: '4rem',
    position: 'absolute',
    width: '51.6rem',
    height: '33.7rem',
    background: '$gray700',
    boxShadow: '.4rem 1.6rem 2.4rem rgba(0, 0, 0, 0.25)',
    borderRadius: '1.2rem',
    margin: '0 auto',

    '& > h2': {
        width: '100%',
        height: '2.5rem',
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
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    padding: '2.4rem 3.4rem 0 0',
    top: 0,
    right: 0,
    color: '$gray600',
  })

export const OptionsLogin = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.6rem',
})