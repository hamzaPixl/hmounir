#!/usr/bin/env node

/**
 * Script de dépannage pour résoudre les problèmes courants
 *
 * Ce script:
 * 1. Nettoie le cache de Next.js
 * 2. Vérifie la configuration i18n
 * 3. Vérifie les redirections
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// ANSI color codes for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  magenta: '\x1b[35m',
};

console.log(`${colors.bright}${colors.blue}🔍 Démarrage du dépannage...${colors.reset}\n`);

// Étape 1: Nettoyer le cache
console.log(`${colors.yellow}🧹 Nettoyage du cache...${colors.reset}`);
try {
  execSync('rm -rf .next', { stdio: 'inherit' });
  execSync('rm -rf node_modules/.cache', { stdio: 'inherit' });
  console.log(`${colors.green}✅ Cache nettoyé avec succès!${colors.reset}\n`);
} catch (error) {
  console.error(
    `${colors.red}❌ Erreur lors du nettoyage du cache: ${error.message}${colors.reset}`
  );
}

// Étape 2: Vérifier la configuration i18n
console.log(`${colors.yellow}🌐 Vérification de la configuration i18n...${colors.reset}`);
try {
  const i18nConfigPath = path.join(process.cwd(), 'next-i18next.config.js');
  if (fs.existsSync(i18nConfigPath)) {
    const i18nConfig = require(i18nConfigPath);
    console.log(`${colors.blue}ℹ️ Configuration i18n trouvée:${colors.reset}`);
    console.log(`   - Langue par défaut: ${i18nConfig.i18n.defaultLocale}`);
    console.log(`   - Langues disponibles: ${i18nConfig.i18n.locales.join(', ')}`);
    console.log(
      `   - Détection automatique: ${i18nConfig.i18n.localeDetection ? 'Activée' : 'Désactivée'}`
    );

    if (i18nConfig.i18n.localeDetection) {
      console.log(
        `${colors.yellow}⚠️ La détection automatique de la langue est activée, ce qui peut causer des redirections infinies.${colors.reset}`
      );
      console.log(
        `   Considérez désactiver cette option en mettant 'localeDetection: false' dans next-i18next.config.js.`
      );
    } else {
      console.log(
        `${colors.green}✅ La détection automatique de la langue est désactivée, ce qui est recommandé.${colors.reset}`
      );
    }
  } else {
    console.log(`${colors.red}❌ Fichier de configuration i18n non trouvé!${colors.reset}`);
  }
  console.log();
} catch (error) {
  console.error(
    `${colors.red}❌ Erreur lors de la vérification de la configuration i18n: ${error.message}${colors.reset}\n`
  );
}

// Étape 3: Vérifier les redirections dans next.config.js
console.log(`${colors.yellow}🔄 Vérification des redirections...${colors.reset}`);
try {
  const nextConfigPath = path.join(process.cwd(), 'next.config.js');
  if (fs.existsSync(nextConfigPath)) {
    const nextConfigContent = fs.readFileSync(nextConfigPath, 'utf8');
    if (nextConfigContent.includes('redirects')) {
      console.log(
        `${colors.yellow}⚠️ Des redirections sont configurées dans next.config.js, ce qui pourrait causer des problèmes.${colors.reset}`
      );
    } else {
      console.log(
        `${colors.green}✅ Aucune redirection trouvée dans next.config.js.${colors.reset}`
      );
    }
  } else {
    console.log(`${colors.red}❌ Fichier next.config.js non trouvé!${colors.reset}`);
  }
  console.log();
} catch (error) {
  console.error(
    `${colors.red}❌ Erreur lors de la vérification des redirections: ${error.message}${colors.reset}\n`
  );
}

// Conseils pour résoudre les problèmes de redirection
console.log(
  `${colors.bright}${colors.blue}🔧 Conseils pour résoudre les problèmes de redirection:${colors.reset}`
);
console.log(`1. Désactivez la détection automatique de la langue (localeDetection: false)`);
console.log(`2. Supprimez toutes les redirections personnalisées dans next.config.js`);
console.log(`3. Assurez-vous que trailingSlash est cohérent (true ou false) dans next.config.js`);
console.log(`4. Effacez les cookies de votre navigateur pour le domaine localhost`);
console.log(`5. Redémarrez le serveur de développement avec 'npm run dev:clean'`);
console.log();

console.log(`${colors.bright}${colors.magenta}🎉 Dépannage terminé!${colors.reset}`);
console.log(
  `${colors.bright}${colors.blue}🚀 Exécutez 'npm run dev:clean' pour redémarrer le serveur de développement.${colors.reset}`
);
