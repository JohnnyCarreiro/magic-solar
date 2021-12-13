import styled from 'styled-components'

export const Container = styled.section`
  min-height: 692px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`
export const FormWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 80px;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`
export const Icon = styled.a`
  margin: 32px 0 32px 0;
  color: #fff;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;

  @media screen and (max-width: 480px) {
    margin: 16px 0 8px 0;
  }
`
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`
export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  width: 100%;
  height: auto;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`
export const FormTitle = styled.h2`
  margin-bottom: 40px;
  color: #fff;
  font-size: 1.25;
  font-weight: 600;
  text-align: center;
`
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 0.875rem;
  color: #fff;
`
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`
export const FormButton = styled.button`
  background: #01be71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1.25rem;
  cursor: pointer;
`
export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 0.875rem;
`
