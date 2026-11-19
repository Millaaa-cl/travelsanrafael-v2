// Hook PreToolUse (Bash y PowerShell): antes de un "git commit" o "git push" pide confirmación al usuario.
// Proceso acordado: primero se muestra el cambio en local (npm run dev o captura) y recién después se pregunta
// si se hace commit y push, porque un push a main publica en producción (travelsanrafael.cl).
let raw = '';
process.stdin.on('data', (c) => (raw += c));
process.stdin.on('end', () => {
  let cmd = '';
  try { cmd = JSON.parse(raw)?.tool_input?.command ?? ''; } catch { process.exit(0); }
  // "git ... commit/push" dentro del mismo comando (sin cruzar ; & | ni saltos de línea). Algún falso positivo raro solo pregunta de más.
  if (!/\bgit\b[^;&|\n]*\b(commit|push)\b/.test(cmd)) process.exit(0);
  const push = /\bpush\b/.test(cmd);
  process.stdout.write(JSON.stringify({
    hookSpecificOutput: {
      hookEventName: 'PreToolUse',
      permissionDecision: 'ask',
      permissionDecisionReason: push
        ? 'git push publica en travelsanrafael.cl. ¿Ya revisaste el cambio en local y quieres publicarlo?'
        : '¿Ya revisaste el cambio en local? Confirma el commit (el push publica en producción).',
    },
  }));
});
