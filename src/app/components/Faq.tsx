import React from "react";

const Faq = () => {
  return (
    <div className="w-full h-auto pt-9 text-white flex flex-col justify-center items-center bg-black">
      <h1 className="text-4xl font-semibold mb-8">FAQ's</h1>
      <div className="w-11/12 md:w-8/12 lg:w-6/12">
        <details className="mb-4 p-4 border-b-2 border-b-blue-500 rounded-lg">
          <summary className="cursor-pointer text-lg font-semibold">
            How does P2P.me address the "bank account freeze" issue?
          </summary>
          <p className="mt-2 text-sm">
            Fraudsters exploit peer-to-peer (P2P) transactions by purchasing
            USDC (USD Coin) from legitimate members using fraudulent Indian
            Rupees (INR). As a result, the seller unknowingly receives
            fraudulent INR into their bank account. When authorities trace the
            money trail to recover the illicit funds, they often freeze the
            legitimate seller's bank account without identifying the actual
            fraudster. This issue is a well-known problem within P2P
            communities. P2P.me addresses this problem by implementing a
            Reputation Points (RP) system to set transaction limits for users.
            New users start with a $0 transaction limit, preventing them from
            participating in P2P transactions unless they submit zero-knowledge
            KYC (Zk-KYC) verification or are recommended by another community
            member who has at least 200 RP. If an existing member recommends a
            fraudster to the community and fraud is subsequently reported, both
            the fraudster's and the recommending member's RP will be reduced.
            This mechanism discourages members from endorsing untrustworthy
            individuals and helps maintain the integrity of the community.
          </p>
        </details>
        <details className="mb-4 p-4 border-b-2 border-b-blue-500 rounded-lg">
          <summary className="cursor-pointer text-lg font-semibold">
            What is RP (Reputation Points) on P2P.me?
          </summary>
          <p className="mt-2 text-sm">
            Reputation Points (RP) are a trust metric on P2P.me that prevent
            fraud by setting transaction limits based on your RP. Higher RP
            allows you to buy or sell more USDC (USD Coin) on the platform. How
            to Increase Your Transaction Limits: Recommendations from Trusted
            Members: • Earn 50 RP per Recommendation: Get recommended by members
            with over 200 RP. • Multiple Recommendations: Each additional
            recommendation adds another 50 RP. Zero-Knowledge KYC (ZK-KYC): •
            Earn 300 RP and a $10 Reward: Submit a zero-knowledge proof of your
            Aadhaar card. • Note: Your ZK-KYC information will be accessible to
            the Indian government. Transaction Milestones: • After 5
            Transactions: Earn an additional 75 RP. • After 25 Transactions:
            Earn another 75 RP. Calculation: Your transaction limit is half of
            your total RP.
          </p>
        </details>
        <details className="mb-4 p-4 border-b-2 border-b-blue-500 rounded-lg">
          <summary className="cursor-pointer text-lg font-semibold">
            How can I earn Reputation Points (RP) on P2P.me?
          </summary>
          <p className="mt-2 text-sm">
            You can earn Reputation Points (RP) on P2P.me through various
            methods: • Recommendations from Trusted Members: Earn 50 RP per
            recommendation from members with over 200 RP. • Zero-Knowledge KYC
            (ZK-KYC): Earn 300 RP and a $10 reward by submitting a
            zero-knowledge proof of your Aadhaar card. • Transaction Milestones:
            Earn 75 RP after completing 5 transactions and another 75 RP after
            completing 25 transactions.
          </p>
        </details>
        <details className="mb-4 p-4 border-b-2 border-b-blue-500 rounded-lg">
          <summary className="cursor-pointer text-lg font-semibold">
            What is Zero-Knowledge KYC (ZK-KYC)?
          </summary>
          <p className="mt-2 text-sm">
            Zero-Knowledge KYC (ZK-KYC) is a verification process that allows
            you to prove your identity without revealing sensitive information.
            On P2P.me, you can earn 300 RP and a $10 reward by submitting a
            zero-knowledge proof of your Aadhaar card. Note that your ZK-KYC
            information will be accessible to the Indian government.
          </p>
        </details>
        <details className="mb-4 p-4 border-b-2 border-b-blue-500 rounded-lg">
          <summary className="cursor-pointer text-lg font-semibold">
            How are transaction limits calculated on P2P.me?
          </summary>
          <p className="mt-2 text-sm">
            Transaction limits on P2P.me are based on your Reputation Points
            (RP). Your transaction limit is half of your total RP. For example,
            if you have 200 RP, your transaction limit will be 100 USDC.
          </p>
        </details>
        <details className="mb-4 p-4 border-b-2 border-b-blue-500 rounded-lg">
          <summary className="cursor-pointer text-lg font-semibold">
            What happens if I recommend a fraudster on P2P.me?
          </summary>
          <p className="mt-2 text-sm">
            If you recommend a fraudster to the P2P.me community and fraud is
            subsequently reported, both your RP and the fraudster's RP will be
            reduced. This mechanism discourages members from endorsing
            untrustworthy individuals and helps maintain the integrity of the
            community.
          </p>
        </details>
        <details className="mb-4 p-4 border-b-2 border-b-blue-500 rounded-lg">
          <summary className="cursor-pointer text-lg font-semibold">
            How can I increase my transaction limits on P2P.me?
          </summary>
          <p className="mt-2 text-sm">
            You can increase your transaction limits on P2P.me by earning more
            Reputation Points (RP). You can earn RP through recommendations from
            trusted members, submitting Zero-Knowledge KYC (ZK-KYC), and
            reaching transaction milestones. The more RP you have, the higher
            your transaction limits will be.
          </p>
        </details>
        <details className="mb-4 p-4 border-b-2 border-b-blue-500 rounded-lg">
          <summary className="cursor-pointer text-lg font-semibold">
            What is the benefit of having higher Reputation Points (RP) on
            P2P.me?
          </summary>
          <p className="mt-2 text-sm">
            Higher Reputation Points (RP) on P2P.me allow you to buy or sell
            more USDC (USD Coin) on the platform. It also indicates a higher
            level of trust within the community, making it easier for you to
            engage in transactions with other members.
          </p>
        </details>
      </div>
    </div>
  );
};

export default Faq;
