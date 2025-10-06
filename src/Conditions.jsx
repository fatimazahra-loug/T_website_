import { motion } from 'framer-motion';
import './Conditions.css';
import { useTranslation } from 'react-i18next';

import cond from './assets/Conditions-generales.pdf'
function Conditions() {
    const  { t}= useTranslation();

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = cond; 
        link.download = 'Conditions-generales.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="conditions-container">
            {/* Hero Section */}
            <motion.section 
                className="conditions-hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="conditions-hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {t('cond',{defaultValue:'Conditions Générales'})}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                       {t('p10',{defaultValue: 'Dernière mise à jour : 4 avril 2023'})}
                    </motion.p>
                </div>
            </motion.section>

            {/* Contenu des conditions */}
            <section className="conditions-content">
            <div className="conditions-text">
                <div className="last-update">
                <p>{t('p11', { defaultValue: 'Les conditions générales ont été mises à jour pour la dernière fois le 4 avril 2023' })}</p>
                </div>

                <article className="conditions-article">
                <h2>{t('h1', { defaultValue: '1. Introduction' })}</h2>
                <p>
                    {t('p12', {
                    defaultValue: `Les présentes conditions générales s'appliquent à ce site web et aux transactions liées à nos produits et services. Vous pouvez être liés par des contrats supplémentaires en lien avec votre relation avec nous ou à tout produit ou service que vous recevez de notre part. Si des dispositions de contrats supplémentaires sont en conflit avec des dispositions des présentes conditions générales, les dispositions de ces contrats supplémentaires prévaudront.`
                    })}
                </p>

                <h2>{t('h2', { defaultValue: '2. Obligatoire' })}</h2>
                <p>
                    {t('p13', {
                    defaultValue: `En vous inscrivant sur ce site, en y accédant ou en l'utilisant de toute autre manière, vous acceptez par les présentes d'être lié par les conditions générales énoncées ci-dessous. La simple utilisation de ce site web implique la connaissance et l'acceptation des présentes conditions générales. Dans certains cas particuliers, nous pouvons également vous demander de donner votre accord explicite.`
                    })}
                </p>

                <h2>{t('h3', { defaultValue: '3. Communication électronique' })}</h2>
                <p>
                    {t('p14', {
                    defaultValue: `En utilisant ce site web ou en communiquant avec nous par des moyens électroniques, vous acceptez et reconnaissez que nous pouvons communiquer avec vous par voie électronique sur notre site web ou en vous envoyant un e-mail, et vous acceptez que tous les accords, notifications, publications et autres communications que nous vous fournissons par voie électronique répondent à toute exigence légale, y compris mais sans s'y limiter, l'exigence que ces communications soient faites par écrit.`
                    })}
                </p>

                <h2>{t('h4', { defaultValue: '4. Propriété intellectuelle' })}</h2>
                <p>
                    {t('p15', {
                    defaultValue: `Nous ou nos licenciés possédons et contrôlons tous les droits d'auteur et autres droits de propriété intellectuelle sur le site web et les données, informations et autres ressources affichées ou accessibles sur le site web.`
                    })}
                </p>

                <h3>{t('h41', { defaultValue: '4.1 Tous droits réservés' })}</h3>
                <p>
                    {t('p16', {
                    defaultValue: `À moins qu'un contenu spécifique n'en décide autrement, aucune licence ni aucun droit ne vous est accordé en vertu des droits d'auteur, des marques, des brevets ou d'autres droits de propriété intellectuelle. Cela signifie que vous n'utiliserez, copierez, reproduirez, exécuterez, afficherez, distribuerez, intégrerez dans un medium électronique, modifierez, rétro-ingénierez, décompilerez, transférerez, téléchargerez, transmettrez, monétiserez, vendrez, marchandiserez ou commercialiserez aucune des ressources de ce site web sous quelque forme que ce soit, sans notre autorisation écrite préalable, sauf et uniquement dans la mesure où il en est stipulé autrement dans des règlements de droit impératif (tels que le droit de citer).`
                    })}
                </p>

                <h2>{t('h5', { defaultValue: '5. Propriété de tierce partie' })}</h2>
                <p>
                    {t('p17', {
                    defaultValue: `Notre site web peut inclure des hyperliens ou d'autres références aux sites web de tierces parties. Nous ne surveillons ni n'examinons le contenu des sites web de tierces parties qui sont liés à ce site web. Les produits ou services offerts par d'autres sites web sont soumis aux conditions générales applicables de ces tiers. Les opinions exprimées ou les éléments apparaissant sur ces sites ne sont pas nécessairement partagés ou approuvés par nous.`
                    })}
                </p>
                <p>
                    {t('p18', {
                    defaultValue: `Nous ne sommes pas responsables des pratiques de confidentialité ou du contenu de ces sites. Vous assumez tous les risques liés à l'utilisation de ces sites web et de tout services de tierce parties. Nous n'accepterons aucune responsabilité pour toute perte ou dommage, quelle qu'en soit la cause, résultant de la divulgation de vos informations personnelles à des tiers.`
                    })}
                </p>

                {/* Continue with the pattern for the remaining sections */}
                <h2>{t('h6', { defaultValue: '6. Utilisation responsable' })}</h2>
                <p>
                    {t('p19', {
                    defaultValue: `En visitant notre site web, vous acceptez de l'utiliser uniquement aux fins prévues et autorisées par les présentes conditions générales, par tout contrat supplémentaire conclu avec nous, et par les lois et règlements applicables, ainsi que par les pratiques en ligne et les directives industrielles généralement acceptées. Vous ne devez pas utiliser notre site web ou nos services pour utiliser, publier ou distribuer tout élément qui consiste en (ou est lié à) un logiciel malveillant ; utiliser les données collectées sur notre site web pour toute activité de marketing direct, ou mener toute activité de collecte de données systématique ou automatisée sur ou en relation avec notre site web.`
                    })}
                </p>
                <p>
                    {t('p20', {
                    defaultValue: `Il est strictement interdit de s'engager dans toute activité qui cause, ou pourrait causer, des dommages au site web ou qui interfère avec la performance, la disponibilité ou l'accessibilité du site web.`
                    })}
                </p>

                <h2>{t('h7', { defaultValue: '7. Politique de remboursement et de retour' })}</h2>
                <h3>{t('h71', { defaultValue: '7.1 Droit de rétractation' })}</h3>
                <p>
                    {t('p21', {
                    defaultValue: `Vous avez le droit de résilier ce contrat dans les 14 jours sans donner de raison.`
                    })}
                </p>
                <p>
                    {t('p22', {
                    defaultValue: `Le délai de rétractation expire après 14 jours à compter du jour de la conclusion du contrat.`
                    })}
                </p>
                <p>
                    {t('p23', {
                    defaultValue: `Pour exercer le droit de rétractation, vous devez nous informer de votre décision de résilier le présent contrat par une déclaration sans équivoque (par exemple, une lettre envoyée par courrier, par télécopie ou par e-mail). Vous trouverez nos coordonnées ci-dessous. Vous pouvez utiliser le modèle de formulaire de rétractation ci-joint, mais ce n'est pas obligatoire.`
                    })}
                </p>
                <p>
                    {t('p24', {
                    defaultValue: `Si vous utilisez cette option, nous vous communiquerons sans délai un accusé de réception de cette rétractation sur un support durable (par exemple par e-mail).`
                    })}
                </p>
                <p>
                    {t('p25', {
                    defaultValue: `Pour respecter le délai de rétractation, il vous suffit d'envoyer votre communication concernant l'exercice de votre droit de rétractation avant l'expiration du délai de rétractation.`
                    })}
                </p>

                <h3>{t('h72', { defaultValue: '7.2 Effets de la rétractation' })}</h3>
                <p>
                    {t('p26', {
                    defaultValue: `Si vous résiliez le présent contrat, nous vous rembourserons tous les paiements reçus de votre part, y compris les frais de livraison (à l'exception des frais supplémentaires résultant de votre choix d'un type de livraison autre que le type de livraison standard le moins cher que nous proposons), sans retard injustifié et en tout cas au plus tard dans les 14 jours à compter du jour où nous sommes informés de votre décision de résilier le présent contrat. Nous effectuerons ce remboursement en utilisant le même moyen de paiement que celui que vous avez utilisé pour la transaction initiale, à moins que vous n'en ayez expressément convenu autrement ; en tout état de cause, vous n'aurez pas à supporter de frais du fait de ce remboursement.`
                    })}
                </p>
                <p>
                    {t('p27', {
                    defaultValue: `Si vous avez demandé à commencer l'exécution des services pendant la période de rétractation, vous devrez nous verser un montant proportionnel à ce qui a été fourni jusqu'à ce que vous nous ayez communiqué votre rétractation du présent contrat, par rapport à la couverture totale du contrat.`
                    })}
                </p>
                <p>
                    {t('p28', {
                    defaultValue: `Veuillez noter qu'il existe certaines exceptions légales au droit de rétractation, et que certains éléments ne peuvent donc pas être retournés ou échangés. Nous vous ferons savoir si cela s'applique à votre cas particulier.`
                    })}
                </p>

                <h2>{t('h8', { defaultValue: '8. Soumission d’idée' })}</h2>
                <p>
                    {t('p29', {
                    defaultValue: `N’envoyez aucune idée, invention, œuvre d’auteur ou autre information pouvant être considérée comme votre propre propriété intellectuelle que vous souhaiteriez nous présenter, sauf si nous avons préalablement signé un accord concernant la propriété intellectuelle ou un accord de non-divulgation. Si vous nous le divulguez en l’absence d’un tel accord écrit, vous nous accordez une licence mondiale, irrévocable, non exclusive et libre de redevance pour utiliser, reproduire, stocker, adapter, publier, traduire et distribuer votre contenu sur tout support existant ou futur.`
                    })}
                </p>

                <h2>{t('h9', { defaultValue: '9. Fin de l’utilisation' })}</h2>
                <p>
                    {t('p30', {
                    defaultValue: `Nous pouvons, à notre seule discrétion, à tout moment modifier ou interrompre l’accès, temporairement ou de façon permanente, au site web ou à tout service qui s’y trouve. Vous acceptez que nous ne soyons pas responsables envers vous ou une tierce partie de toute modification, suspension ou interruption de votre accès ou utilisation du site web ou de tout contenu que vous avez pu partager sur le site web. Vous n’aurez droit à aucune compensation ou autre paiement, même si certaines fonctionnalités, certains réglages et/ou tout contenu auquel vous avez contribué ou sur lequel vous vous êtes appuyé sont définitivement perdus. Vous ne devez pas contourner ou détourner, ou tenter de contourner ou de détourner, les mesures de restriction d’accès à notre site web.`
                    })}
                </p>

                <h2>{t('h10', { defaultValue: '10. Garanties et responsabilité' })}</h2>
                <p>
                    {t('p31', {
                    defaultValue: `Rien dans cette section ne limitera ou n’exclura une garantie implicite de la loi qu’il serait illégal de limiter ou d’exclure. Ce site web et tout son contenu sont fournis « en l’état » et « selon disponibilité » et peuvent contenir des inexactitudes ou des erreurs typographiques. Nous déclinons expressément toute garantie de quelque nature que ce soit, expresse ou implicite, quant à la disponibilité, l’exactitude ou l’exhaustivité du contenu. Nous ne garantissons pas ceci :`
                    })}
                </p>
                <li>{t('p32', { defaultValue: 'que ce site web ou notre contenu répondront à vos besoins ;' })}</li>
                <li>{t('p33', { defaultValue: 'ce site web sera disponible de manière ininterrompue, opportune, sûre ou sans erreur.' })}</li>
                <p>
                    {t('p34', {
                    defaultValue: `Rien sur ce site web ne constitue ou n’est censé constituer un conseil juridique, financier ou médical de quelque nature que ce soit. Si vous avez besoin de conseils, vous devriez consulter un professionnel approprié.`
                    })}
                </p>
                <p>
                    {t('p35', {
                    defaultValue: `Les dispositions suivantes de la présente section s’appliqueront dans la mesure maximale permise par le droit applicable et ne limiteront ni n’excluront notre responsabilité en ce qui concerne toute question pour laquelle il serait illégal ou illicite pour nous de limiter ou d’exclure notre responsabilité. En aucun cas nous ne serons responsables des dommages directs ou indirects (y compris les dommages pour perte de profits ou de revenus, la perte ou la corruption de données, de logiciels ou de bases de données, ou la perte ou l’endommagement de biens ou de données) subis par vous ou par une tierce partie, résultant de votre accès à notre site web ou de son utilisation.`
                    })}
                </p>
                <p>
                    {t('p36', {
                    defaultValue: `Sauf dans la mesure où tout contrat supplémentaire stipule expressément le contraire, notre responsabilité maximale envers vous pour tout dommage découlant de ou lié au site web ou à tout produit et service commercialisé ou vendu par le biais du site web, quelle que soit la forme de l’action en justice qui impose la responsabilité (qu’elle soit contractuelle, d’équité, de négligence, de conduite intentionnelle, délictuelle ou autre) sera limitée au prix total que vous nous avez payé pour acheter ces produits ou services ou utiliser le site web. Cette limite s’appliquera globalement à toutes vos réclamations, actions et causes d’action de toute nature et de tout type.`
                    })}
                </p>

                <h2>{t('h11', { defaultValue: '11. Confidentialité' })}</h2>
                <p>
                    {t('p37', {
                    defaultValue: `Pour accéder à notre site web et/ou à nos services, il peut vous être demandé de fournir certaines informations vous concernant dans le cadre de la procédure d’inscription. Vous acceptez que toutes les informations que vous fournissez soient toujours exactes, correctes et à jour.`
                    })}
                </p>
                <p>
                    {t('p38', {
                    defaultValue: `Nous avons élaboré une politique pour répondre à toutes vos préoccupations en matière de protection de la vie privée. Pour plus d’informations, veuillez consulter notre déclaration de confidentialité et notre politique de cookies.`
                    })}
                </p>

                <h2>{t('h12', { defaultValue: '12. Restrictions à l’exportation / Conformité juridique' })}</h2>
                <p>
                    {t('p39', {
                    defaultValue: `L’accès au site web à partir de territoires ou de pays où le contenu ou l’achat des produits ou services vendus sur le site web est illégal est interdit. Vous ne pouvez pas utiliser ce site web en violation des lois et règlements d’exportation de Maroc.`
                    })}
                </p>

                <h2>{t('h13', { defaultValue: '13. Affectation' })}</h2>
                <p>
                    {t('p40', {
                    defaultValue: `Vous ne pouvez céder, transférer ou sous-traiter aucun de vos droits et/ou obligations en vertu des présentes conditions générales, en tout ou en partie, à une tierce partie sans notre consentement écrit préalable. Toute cession présumée en violation de la présente section sera nulle et non avenue.`
                    })}
                </p>

                <h2>{t('h14', { defaultValue: '14. Violation des présentes conditions générales' })}</h2>
                <p>
                    {t('p41', {
                    defaultValue: `Sans préjudice de nos autres droits en vertu des présentes conditions générales, si vous violez les présentes conditions générales de quelque manière que ce soit, nous pouvons prendre les mesures que nous jugeons appropriées pour traiter la violation, y compris la suspension temporaire ou permanente de votre accès au site web, la prise de contact avec votre fournisseur d’accès Internet pour lui demander de bloquer votre accès au site web, et/ou engager une action en justice contre vous.`
                    })}
                </p>

                <h2>{t('h15', { defaultValue: '15. Force majeure' })}</h2>
                <p>
                    {t('p42', {
                    defaultValue: `À l’exception des obligations de paiement en vertu des présentes, aucun retard, manquement ou omission par l’une des parties d’exécuter ou d’observer l’une de ses obligations en vertu des présentes ne sera considéré comme une violation des présentes conditions générales si et aussi longtemps que ce retard, ce manquement ou cette omission résulte d’une cause indépendante de la volonté raisonnable de cette partie.`
                    })}
                </p>

                <h2>{t('h16', { defaultValue: '16. Indemnisation' })}</h2>
                <p>
                    {t('p43', {
                    defaultValue: `Vous acceptez de nous indemniser, de nous défendre et de nous tenir à l’écart de toutes les réclamations, responsabilités, dommages, pertes et dépenses liés à votre violation des présentes conditions générales et des lois applicables, y compris les droits de propriété intellectuelle et les droits à la vie privée. Vous nous rembourserez rapidement les dommages, pertes, coûts et dépenses liés à ces réclamations ou en découlant.`
                    })}
                </p>

                <h2>{t('h17', { defaultValue: '17. Dérogation' })}</h2>
                <p>
                    {t('p44', {
                    defaultValue: `Le fait de ne pas appliquer l’une des dispositions énoncées dans les présentes conditions générales et dans tout accord, ou de ne pas exercer une option de résiliation, ne doit pas être interprété comme une renonciation à ces dispositions et n’affecte pas la validité des présentes conditions générales ou de tout accord ou de toute partie de celui-ci, ni le droit par la suite d’appliquer chacune des dispositions.`
                    })}
                </p>

                <h2>{t('h18', { defaultValue: '18. Langue' })}</h2>
                <p>
                    {t('p45', {
                    defaultValue: `Les présentes conditions générales seront traduites exclusivement en Français. Toutes les notifications et la correspondance seront rédigés exclusivement dans cette langue.`
                    })}
                </p>

                <h2>{t('h19', { defaultValue: '19. Accord intégral' })}</h2>
                <p>
                    {t('p46', {
                    defaultValue: `Ces conditions générales, ainsi que nos déclaration de confidentialité et politique de cookies, constituent l’intégralité de l’accord entre vous et TECASER concernant votre utilisation de ce site web.`
                    })}
                </p>

                <h2>{t('h20', { defaultValue: '20. Mise à jour des présentes conditions générales' })}</h2>
                <p>
                    {t('p47', {
                    defaultValue: `Nous pouvons de temps en temps mettre à jour ces conditions générales. Il est de votre devoir de vérifier périodiquement les présentes conditions générales pour voir si elles ont été modifiées ou mises à jour. La date indiquée au début des présentes conditions générales est la date de révision la plus récente. Les modifications apportées aux présentes conditions générales entreront en vigueur dès qu’elles seront publiées sur ce site web. Votre utilisation continue de ce site web après la publication de modifications ou de mises à jour sera considérée comme une notification de votre acceptation de respecter et d’être lié par ces conditions générales.`
                    })}
                </p>

                <h2>{t('h21', { defaultValue: '21. Choix de la loi et de la juridiction' })}</h2>
                <p>
                    {t('p48', {
                    defaultValue: `Les présentes conditions générales sont régies par les lois de Maroc. Tout litige relatif aux présentes conditions générales sera soumis à la juridiction des tribunaux de Maroc. Si une partie ou une disposition des présentes conditions générales est jugée par un tribunal ou une autre autorité comme étant invalide et/ou inapplicable en vertu du droit applicable, cette partie ou disposition sera modifiée, supprimée et/ou appliquée dans la plus large mesure possible afin de donner effet à l’intention des présentes conditions générales. Les autres dispositions ne seront pas affectées.`
                    })}
                </p>

                <h2>{t('h22', { defaultValue: '22. Information de contact' })}</h2>
                <p>
                    {t('p49', {
                    defaultValue: `Ce site web est détenu et exploité par TECASER. Vous pouvez nous contacter au sujet des présentes conditions générales en nous écrivant ou en nous envoyant un e-mail à l’adresse suivante : 15 Centre d'Affaires, Av. Hassan II, Kénitra 14000, Maroc`
                    })}
                </p>

                <h2>{t('h23', { defaultValue: '23. Téléchargement' })}</h2>
                <p>
                    {t('p50', {
                    defaultValue: `Vous pouvez également télécharger nos conditions générales au format PDF.`
                    })}
                </p>

                <div className="download-section">
                    <button className="download-btn-conditions" onClick={handleDownload}>
                    📄 {t('download',{defaultValue:'Télécharger en PDF'})}
                    </button>
                </div>
                </article>
            </div>
            </section>
        </div>
    );
}

export default Conditions;