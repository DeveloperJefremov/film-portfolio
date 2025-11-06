import 'client-only';

type SessionStorageResultType<T> = {
	success: boolean;
	error: Error | null;
	data: T;
	key: string | null;
};

// Тип методов для работы с sessionStorage
// type SessionStorageType = {
// 	createRecord: (key: string, value: unknown) => SessionStorageResultType; // Создание новой записи
// 	readRecord: (key: string) => SessionStorageResultType; // Чтение записи по ключу
// 	readAllRecords: () => SessionStorageResultType; // Чтение всех записей
// 	updateRecord: (key: string, value: unknown) => SessionStorageResultType; // Обновление записи по ключу
// 	deleteRecord: (key: string) => SessionStorageResultType; // Удаление записи по ключу
// 	deleteAllRecords: () => SessionStorageResultType; // Удаление всех записей
// };

export const createRecord = <T = unknown>(
	key: string,
	value: T
): SessionStorageResultType<T> => {
	try {
		const existingRecord = readRecord(key);
		if (existingRecord.success && existingRecord.data !== undefined) {
			return {
				success: false,
				error: new Error('Value already exists. Use updateRecord function.'),
				data: value,
				key: key,
			};
		}
		const jsonValue = JSON.stringify(value);
		window.sessionStorage.setItem(key, jsonValue);
		return { success: true, error: null, data: value, key: key };
	} catch (error) {
		return {
			success: false,
			error: new Error(
				`Error writing to sessionStorage. Error message: ${error.message}`
			),
			data: value,
			key: key,
		};
	}
};
export const readRecord = <T = unknown>(
	key: string
): SessionStorageResultType<T | undefined> => {
	try {
		const nullableItem = window.sessionStorage.getItem(key);

		const item = nullableItem === null ? undefined : nullableItem;

		if (item === undefined) {
			return {
				success: true,
				error: null,
				data: undefined,
				key: key,
			};
		} else {
			const parsedDate = JSON.parse(item) as T;
			return {
				success: true,
				error: null,
				data: parsedDate,
				key: key,
			};
		}
	} catch (error) {
		return {
			success: false,
			error: new Error('Error reading from sessionStorage'),
			data: undefined,
			key: key,
		};
	}
};
export const updateRecord = <T = unknown>(
	key: string,
	value: T
): SessionStorageResultType<T> => {
	try {
		const existingRecord = readRecord(key);
		if (!existingRecord.success || existingRecord.data === undefined) {
			return {
				success: false,
				error: new Error('Value does not exist. Use createRecord.'),
				data: value,
				key: key,
			};
		}

		window.sessionStorage.setItem(key, JSON.stringify(value));
		return { success: true, error: null, data: value, key: key };
	} catch (error) {
		return {
			success: false,
			error: new Error(
				`Error updating sessionStorage. Error message: ${error.message}`
			),
			data: value,
			key: key,
		};
	}
};
export const deleteRecord = <T = unknown>(
	key: string
): SessionStorageResultType<T | undefined> => {
	try {
		const existingRecord = readRecord<T>(key);
		if (!existingRecord.success || existingRecord.data === undefined) {
			return {
				success: false,
				error: new Error('Value does not exist. Nothing to delete.'),
				data: undefined,
				key: key,
			};
		}
		window.sessionStorage.removeItem(key);
		return {
			success: true,
			error: null,
			data: existingRecord.data,
			key: key,
		};
	} catch (error) {
		return {
			success: false,
			error: new Error(
				`Error deleting from sessionStorage. Error message: ${error.message}`
			),
			data: undefined,
			key: key,
		};
	}
};
export const deleteAllRecords = <
	T = unknown
>(): SessionStorageResultType<T | null> => {
	try {
		window.sessionStorage.clear();
		return { success: true, error: null, data: null, key: null };
	} catch (error) {
		return {
			success: false,
			error: new Error('Error deleting all records from sessionStorage'),
			data: null,
			key: null,
		};
	}
};
// export const readAllRecords = <T>(): SessionStorageResultType<
// 	T | undefined
// > => {
// 	try {
// 		// Получаем все ключи из sessionStorage и создаём объект с данными
// 		const allRecords = Object.keys(window.sessionStorage).reduce<
// 			Record<string, unknown>
// 		>((acc, key) => {
// 			const value = window.sessionStorage.getItem(key); // Получаем значение записи
// 			acc[key] = value ? JSON.parse(value) : null; // Парсим JSON и добавляем в результат
// 			return acc;
// 		}, {});

// 		return { success: true, error: null, data: allRecords, key: null };
// 	} catch (error) {
// 		// Обработка ошибок чтения всех записей
// 		return {
// 			success: false,
// 			error: new Error('Error reading all records from sessionStorage'),
// 			data: undefined,
// 			key: null,
// 		};
// 	}
// };

const SessionStorage = {
	createRecord,
	readRecord,
	// readAllRecords,
	updateRecord,
	deleteRecord,
	deleteAllRecords,
};

export default SessionStorage;
