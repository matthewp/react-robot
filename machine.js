import { useMemo, useState } from 'react';
import { createUseMachine } from 'robot-hooks';

export const useMachine = createUseMachine(useMemo, useState);