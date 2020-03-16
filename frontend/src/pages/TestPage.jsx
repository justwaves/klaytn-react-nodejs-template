import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { integrateWallet } from 'redux/modules/wallet';
import Button from 'components/common/Button';
import HeaderContainer from 'components/common/Header/HeaderContainer';

const TestPage = () => {
  const dispatch = useDispatch();

  const onIntegrateWallet = useCallback(
    privateKey => dispatch(integrateWallet(privateKey)),
    [dispatch],
  );

  const onClick = useCallback(() => {
    const privateKey =
      '0x79b4c8dca968eabb8f5061d3b41888898240543aadfd3d849bed24d61053239e';

    onIntegrateWallet(privateKey);
  }, [onIntegrateWallet]);

  return (
    <>
      <HeaderContainer />
      <Button onClick={onClick}>Integrate Wallet</Button>
    </>
  );
};

export default TestPage;
